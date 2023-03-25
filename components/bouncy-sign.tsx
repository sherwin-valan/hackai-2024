import { useSpring, animated } from 'react-spring'

function BouncySign()
{
  const animatedProps = useSpring
  ({
    from: { translateY: '-2px' },
    to: { translateY: '2px' },
    config: { mass: 10, tension: 50, friction: 0 }
  })

  return(
    <animated.div className="absolute bg-[url('/casino-glow.svg')] bg-no-repeat bg-contain bg-center h-[64vh] w-[64vw] mx-[18vw] my-[18vh]" style={{ ...animatedProps }}>
      <div className="absolute bg-[url('/casino-sign.png')] bg-no-repeat bg-contain bg-center h-[60vh] w-[60vw] mx-[2vw] my-[2vh] text-center text-[#7797A2] text-2xl font-bold">
        <p className="mt-[25%]">AIS Presents</p>
        <p className="mt-[6px] text-[#940E21] text-7xl font-[1000]">HACK AI</p>
        <p className="mt-[10px] ">APRIL 15-16</p>
      </div>
    </animated.div>
  )
}

export default BouncySign;