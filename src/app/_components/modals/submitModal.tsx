import React from 'react'
import { useAppContext } from '@/app/_utils/AppContext';
import { useRouter } from 'next/navigation'


const SubmitModal = () => {

const {setQno,setQid,answered,setFlagged,setAnswered,setModal}=useAppContext()
const answeredLength = 30-Object.keys(answered).length
const router = useRouter();


const cancel=()=>{
    setModal(false)
}

const submit=()=>{
    setQno(1)
    setQid("q1")
    setAnswered({})
    setFlagged([])
    setModal(false)
    router.push('/dashboard/submit')
}

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <p className="text-lg text-center">You have ({answeredLength}) Unanswered Questions, Do you want to submit?</p>
            <div className="flex justify-around mt-4">
            <button
                
                className="bg-black hover:shadow-xl text-white px-4 py-2 rounded-md"
                onClick={submit}
              >
                submit
              </button>
              <button
                
                className="bg-slate-300 hover:bg-slate-600  px-4 py-2 rounded-md text-black"
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
}

export default SubmitModal
