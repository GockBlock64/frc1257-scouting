import snailIcon from "@/assets/snail_logo.png"
import AppBar from "@/sections/AppBar"
import Auto from "@/sections/Auto"
import EndGame from "@/sections/EndGame"
import PreMatch from "@/sections/PreMatch"
import TeleOp from "@/sections/TeleOp"
import Head from "next/head"
import { useEffect, useState } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import QRCode from "react-qr-code"

// This type includes all the fields the form must cover
export type FormValues = {
  team_number: number
  position: string
  cage_position: string
  match_number: number
  preload: boolean
  initials: string
  event: string
  mobility: boolean
  auto_coral1: number
  auto_coral2: number
  auto_coral3: number
  auto_coral4: number
  auto_coral_miss: number
  auto_processor: number
  auto_net: number
  auto_processor_miss: number
  auto_net_miss: number
  tele_coral1: number
  tele_coral2: number
  tele_coral3: number
  tele_coral4: number
  tele_coral_miss: number
  tele_processor: number
  tele_net: number
  tele_processor_miss: number
  tele_net_miss: number
  end_position: string
  malfunction: boolean
}

// Default values for each field
const initialValues: FormValues = {
  team_number: 0,
  position: "Near",
  cage_position: "Shallow",
  match_number: 1,
  preload: false,
  initials: "",
  event: "DCMP",
  mobility: false,
  auto_coral1: 0,
  auto_coral2: 0,
  auto_coral3: 0,
  auto_coral4: 0,
  auto_coral_miss: 0,
  auto_processor: 0,
  auto_net: 0,
  auto_processor_miss: 0,
  auto_net_miss: 0,
  tele_coral1: 0,
  tele_coral2: 0,
  tele_coral3: 0,
  tele_coral4: 0,
  tele_coral_miss: 0,
  tele_processor: 0,
  tele_net: 0,
  tele_processor_miss: 0,
  tele_net_miss: 0,
  end_position: "None",
  malfunction: false,
}

export default function Home(): JSX.Element {
  // Initialize the form
  const form = useForm<FormValues>({
    defaultValues: initialValues,
  })

  // This function runs when the user presses submit
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Gets current date and time
    let date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    // Strategy has a specific format for their data strings that they use in their spreadsheet
    // Instead of using "None", "Docked Together", "Engaged Together", etc. they use "F", "DT", "ET", etc.
    // And this is specifically only for the end position for some reason
    let positionFormat = "near"
    if (data.position === "Middle") positionFormat = "middle"
    else if (data.position === "Far") positionFormat = "far"

    let endPositionFormat = "none"
    if (data.end_position === "Parked") endPositionFormat = "park"
    else if (data.end_position === "Onstage") endPositionFormat = "onstage"

    let preloadFormat = "FALSE"
    if(data.preload) preloadFormat = "TRUE"

    let mobilityFormat = "FALSE"
    if(data.mobility) mobilityFormat = "FALSE"

    let trapFormat = "FALSE"
    if(data.trap) trapFormat = "TRUE"

    let malfunctionFormat = "FALSE"
    if(data.malfunction) malfunctionFormat = "TRUE"

    // Output that will be written to a data string
    // Formatted for the spreadsheet
    const output = [
      Number(data.team_number),
      positionFormat,
      Number(data.match_number),
      `${month}/${day}/${year}`,
      preloadFormat,
      data.initials.toUpperCase(),
      data.event,
      mobilityFormat,
      Number(data.auto_amp),
      Number(data.auto_speaker),
      Number(data.auto_amp_miss),
      Number(data.auto_speaker_miss),
      Number(data.tele_amp),
      Number(data.tele_speaker),
      Number(data.tele_amp_miss),
      Number(data.tele_speaker_miss),
      endPositionFormat,
      trapFormat,
      Number(data.harmony),
      malfunctionFormat,
      data.notes,
    ]

    // This string is used to store the data in local storage
    let dataString = JSON.stringify(output)

    // removes quotation marks around TRUE and FALSE
    for(let i = 0; i < dataString.length; i++) {
      if(dataString.substring(i, i+5) === "FALSE") {
        dataString = dataString.substring(0, i-1) + dataString.substring(i, i+5) + dataString.substring(i+6, dataString.length)
      }

      if(dataString.substring(i, i+4) === "TRUE") {
        dataString = dataString.substring(0, i-1) + dataString.substring(i, i+4) + dataString.substring(i+5, dataString.length)
      }
    }

    // Resets the form
    // Keeps initials, scouting position, and event
    // Increments match number
    form.reset({
      ...initialValues,
      initials: data.initials,
      position: data.position,
      event: data.event,
      match_number: Number(data.match_number) + 1,
    })

    // Saves the data string to local storage
    localStorage.setItem(dataString, "")
    setLocalStorageEntries(Object.entries(localStorage))

    // Scrolls to top to make it easier for the user
    window.scrollTo(0, 0)
  }

  // List of entries saved to local storage
  const [localStorageEntries, setLocalStorageEntries] = useState<
    [string, any][]
  >([])
  useEffect(() => {
    setLocalStorageEntries(Object.entries(localStorage).sort())
  }, [])

  return (
    <>
      <Head>
        <title>1257 Scouting App</title>
        <meta
          name="description"
          content="This app is used by FRC Team 1257 to scout how well robots perform for alliance selections."
        />
        <link rel="icon" href={snailIcon.src} />
      </Head>
      <AppBar />

      {/* Provides the context of the form to all the form elements */}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-sans">
          {/* Sections of the website that correspond to different parts of a match */}
          <PreMatch />
          <Auto />
          <TeleOp />
          <EndGame />

          {/* Submit button */}
          <div className="flex flex-row items-center justify-center">
            <button
              type="submit"
              className="p-2 mb-8 text-3xl border-2 border-gray-600 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>

      {/* List of data strings saved to local storage */}
      <section className="flex flex-col gap-2 mx-auto text-center w-full bg-white">
        <div className="h-8" />
        <h2 className="text-4xl font-bold text-black">Data and QR Codes</h2>
        <ul>
          {localStorageEntries.map(([key, value], i) => (
            <li key={i} className="flex items-center justify-center gap-2">
              {/* Shows the string followed by a QR code of it */}
              <div className="flex flex-col mr-4">
                <div className="w-64 mt-8 mb-4 break-all sm:w-96 text-black">{key}</div>
                <QRCode value={key} className="mb-4" />
              </div>

              {/* Button to remove the data string from local storage */}
              <button
                onClick={() => {
                  localStorage.removeItem(key)
                  setLocalStorageEntries(Object.entries(localStorage))
                }}
                className="text-2xl text-black"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
        <div className="h-6" />
      </section>
    </>
  )
}
