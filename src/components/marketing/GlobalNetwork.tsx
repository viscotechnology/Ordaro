"use client"
import createGlobe from "cobe"
import { FunctionComponent, useEffect, useRef } from "react"

export const GlobalNetwork: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 4.7

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
      phi: 0,
      theta: -0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 13,
      mapBaseBrightness: 0.05,
      baseColor: [0.07, 0.20, 0.42], // brand-primary #12326C in RGB (18, 50, 108 / 255)
      glowColor: [0.02, 0.09, 0.59], // brand-secondary #051696 in RGB (5, 22, 150 / 255)
      markerColor: [150, 150, 150],
      markers: [
        // Ghana - KNUST Campus (Kumasi)
        { location: [6.7159, -1.5699], size: 0.04 },
        // Accra, Ghana
        { location: [5.6037, -0.1870], size: 0.03 },
        // Future expansion markers can be added
        // Lagos, Nigeria
        // { location: [6.5244, 3.3792], size: 0.02 },
      ],
      onRender: (state: { phi?: number }) => {
        state.phi = phi
        phi += 0.0002
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  const features = [
    {
      name: "Multi-Region Deployment",
      description: "Cloud-native infrastructure for global scale and low-latency access.",
    },
    {
      name: "Real-Time Sync",
      description: "Orders, inventory, and data sync across all branches instantly.",
    },
    {
      name: "Network Expansion",
      description: "Growing network of restaurants and delivery coverage areas.",
    },
  ]

  return (
    <div className="px-3">
      <section
        aria-labelledby="global-network-title"
        className="relative mx-auto mt-28 flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-950 pt-24 shadow-xl shadow-black/30 md:mt-40"
      >
        <div className="absolute top-[17rem] size-[40rem] rounded-full bg-brand-primary blur-3xl md:top-[20rem]" />
        <div className="z-10 inline-block rounded-lg border border-brand-primary/20 bg-brand-primary/20 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tight sm:text-sm">
          <span className="bg-gradient-to-b from-white to-brand-primary bg-clip-text text-transparent">
            Global Cloud POS
          </span>
        </div>
        <h2
          id="global-network-title"
          className="z-10 mt-6 inline-block bg-gradient-to-b from-white to-gray-300 bg-clip-text px-2 text-center text-5xl font-bold tracking-tighter text-transparent md:text-8xl"
        >
          Network of <br /> Restaurants
        </h2>
        <canvas
          className="absolute top-[7.1rem] z-20 aspect-square size-full max-w-fit md:top-[12rem]"
          ref={canvasRef}
          style={{ width: 1200, height: 1200 }}
        />
        <div className="z-20 -mt-32 h-[36rem] w-full overflow-hidden md:-mt-36">
          <div className="absolute bottom-0 h-3/5 w-full bg-gradient-to-b from-transparent via-gray-950/95 to-gray-950" />
          <div className="absolute inset-x-6 bottom-12 m-auto max-w-4xl md:top-2/3">
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 rounded-lg border border-white/[3%] bg-white/[1%] px-6 py-6 shadow-xl backdrop-blur md:grid-cols-3 md:p-8">
              {features.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <h3 className="whitespace-nowrap bg-gradient-to-b from-brand-primary to-brand-secondary bg-clip-text text-lg font-semibold text-transparent md:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-300/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

