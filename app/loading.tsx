// Any bonus points on offer for a loading animation? No, didn't think so (:

export default function Loading() {
    return (
        <section className="flex justify-center my-14">
            {/* Uncomment for alternative spinner animation */}
            {/* <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-green-500" /> */}
            <div className='flex space-x-2 justify-center items-center bg-white dark:invert h-2/6'>
                <span className='sr-only'>Loading...</span>
                <div className='h-6 w-6 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-6 w-6 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-6 w-6 bg-green-500 rounded-full animate-bounce'></div>
            </div>
        </section>
    )
  }