import { useState, useEffect } from 'react'

export function FollowMouse () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log(clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    // Esto limpia la suscripción al evento pointermove parad que se pare cuando desactivemos el boton
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <>
      <div style={
        {
          backgroundColor: 'red',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          position: 'absolute',
          pointerEvents: 'none',
          left: '-20px',
          top: '-20px',
          transform: `translate(${position.x}px, ${position.y}px)`
        }
      }
      />
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'} seguir el puntero</button>
    </>
  )
}
