import { useEffect, useRef, useState } from 'react'

type Job = {
  id: string
  time: number
}

function compare(a: Job, b: Job) {
  if (a.time < b.time) {
    return -1
  }
  if (a.time > b.time) {
    return 1
  }
  return 0
}

const SJF = () => {
  const [input, setInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [job, setJob] = useState<Job[]>([])
  const [jobCounter, setJobCounter] = useState(1)
  const [waitingTime, setWaitingTime] = useState([])
  const [turnAroundTime, setTurnAroundTime] = useState([])
  const [averageWaitingTime, setAverageWaitingTime] = useState(0)
  const [averageTurnAroundTime, setAverageTurnAroundTime] = useState(0)
  const inputRef = useRef(null)

  const process = () => {
    let result = [0]
    let cache = 0
    for (let i = 0; i < job?.length; i++) {
      cache += job[i].time
      result.push(cache)
    }
    const waitingTime = result.slice(0, -1)
    const turnAroundTime = result.slice(1)
    // @ts-ignore
    setWaitingTime(waitingTime) // @ts-ignore
    setTurnAroundTime(turnAroundTime)

    setAverageWaitingTime(
      waitingTime?.reduce((a, b) => a + b, 0) / waitingTime?.length
    )
    setAverageTurnAroundTime(
      turnAroundTime?.reduce((a, b) => a + b, 0) / turnAroundTime?.length
    )
  }

  useEffect(() => {
    process()
  }, [job])
  return (
    <div className="w-full">
      <h3 className="mb-3 font-bold text-blue-500">
        <span className="mr-3 text-blue-700">1.2.2</span> SJF CPU SCHEDULING
        ALGORITHM
      </h3>
      <h5 className="mb-8 text-justify">
        For SJF scheduling algorithm, read the number of processes/jobs in the
        system, their CPU burst times. Arrange all the jobs in order with
        respect to their burst times. There may be two jobs in queue with the
        same execution time, and then FCFS approach is to be performed. Each
        process will be executed according to the length of its burst time. Then
        calculate the waiting time and turnaround time of each of the processes
        accordingly.
      </h5>
      <div className="grid w-full grid-cols-3 gap-5 mb-10">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (input && Number(inputValue) >= 0) {
              // @ts-ignore
              setJob((p) => [
                ...p,
                {
                  id: jobCounter,
                  time: Number(inputValue),
                },
              ])
              setJobCounter(jobCounter + 1)
              setInput(false)
            } else {
              setInput(true)
              // @ts-ignore
              inputRef.current?.focus()
            }
            setInputValue('-1')
          }}
          className="w-full col-span-2"
        >
          {job?.length !== 0 && (
            <div className="w-full mb-6">
              <div className="grid w-full grid-cols-7 px-2 py-2 border-4 border-blue-500">
                <div className="col-span-1 text-sm font-bold text-center">
                  Process
                </div>
                <div className="col-span-2 text-sm font-bold text-center">
                  CPU Burst Time
                </div>
                <div className="col-span-2 text-sm font-bold text-center">
                  Waiting Time
                </div>
                <div className="col-span-2 text-sm font-bold text-center">
                  Turn Around Time
                </div>
              </div>
              {job?.sort(compare).map((j, i) => (
                <div
                  key={i}
                  className="grid w-full grid-cols-7 px-2 py-2 border-b-4 border-blue-500 border-x-4"
                >
                  <div className="col-span-1 text-sm font-medium text-center">
                    {j?.id + 1}
                  </div>
                  <div className="col-span-2 text-sm text-center">{j.time}</div>
                  <div className="col-span-2 text-sm text-center">
                    {waitingTime[i]}
                  </div>
                  <div className="col-span-2 text-sm text-center">
                    {turnAroundTime[i]}
                  </div>
                </div>
              ))}
            </div>
          )}
          {
            <div
              className={`flex items-center gap-4 ${
                job?.length !== 0 && '!h-auto'
              } ${!input && 'h-full'}`}
            >
              {input && (
                <div className="flex items-center w-full gap-4">
                  <div className="flex items-center w-full gap-5 p-5 border-4 border-blue-500 rounded">
                    <h5 className="text-sm font-medium whitespace-nowrap">
                      Job {job?.length + 1} CPU Burst Time
                    </h5>
                    <input
                      ref={inputRef}
                      type="number"
                      placeholder="1.0"
                      className="w-full px-3 py-2 text-sm border rounded-md focus:border-blue-500 focus:outline-none"
                      step={0.001}
                      onChange={(e) => {
                        setInputValue(e.target.value)
                      }}
                      // value={inputValue}
                    />
                  </div>
                </div>
              )}
              <button
                type="submit"
                className={`${input ? '' : 'h-full w-full'} ${
                  job?.length !== 0 && 'h-auto'
                } hover:text-blue flex items-center justify-center whitespace-nowrap rounded-md border-4 border-blue-500 bg-blue-500 p-7 font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-500 active:scale-95 active:bg-blue-500 active:text-white`}
              >
                Add Job No {job?.length + 1}
              </button>
              <button
                type="button"
                onClick={() => {
                  setInput(false)
                  setInputValue('')
                  setJob([])
                  setJobCounter(0)
                  setWaitingTime([])
                  setTurnAroundTime([])
                  setAverageWaitingTime(0)
                  setAverageTurnAroundTime(0)
                }}
                className={`${
                  input ? '' : 'h-full'
                } hover:text-blue flex items-center justify-center whitespace-nowrap rounded-md border-4 border-blue-500 bg-blue-500 p-7 font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-500 active:scale-95 active:bg-blue-500 active:text-white`}
              >
                Reset
              </button>
            </div>
          }
        </form>
        <div className="flex flex-col justify-end w-full">
          <div className="w-full mb-5 border-4 border-blue-500 rounded-md p-7">
            <h5 className="mr-2 font-medium">
              Average Waiting Time:{' '}
              <span className="px-4 py-1 text-white bg-blue-500 rounded-md whitespace-nowrap">
                {averageWaitingTime
                  ? Math.round((averageWaitingTime + Number.EPSILON) * 100) /
                    100
                  : job?.length > 0
                  ? '0'
                  : '--'}
              </span>
            </h5>
          </div>
          <div className="w-full border-4 border-blue-500 rounded-md p-7">
            <h5 className="mr-2 font-medium">
              Average Turn Around Time:{' '}
              <span className="px-4 py-1 text-white bg-blue-500 rounded-md whitespace-nowrap">
                {averageTurnAroundTime
                  ? Math.round((averageTurnAroundTime + Number.EPSILON) * 100) /
                    100
                  : job?.length > 0
                  ? '0'
                  : '--'}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SJF
