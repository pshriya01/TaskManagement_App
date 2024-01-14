import React from 'react'


const HomePage = () => {
  return (
    <div className="bg-black-100 min-h-screen flex items-center justify-center ">
    <div className="text-center border-red-2">
        <h2 className="text-3xl text-red-600 md:text-4xl lg:text-5xl font-bold mb-4">Manage Your Tasks with Our Task Management App</h2>
        <img
            src="https://blog.planview.com/wp-content/uploads/2017/08/Tip_1_Juggling-too-many-task-Gif_Twitter.gif"
            alt="Your Website Image"
            className="rounded-full mx-auto mb-8 shadow-md"
            style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p className="text-lg md:text-xl lg:text-2xl">Welcome to our website, your go-to task management solution designed to elevate your productivity to new heights.
        Say goodbye to scattered to-do lists and hello to a streamlined workflow. Sign up today and experience the next level of task management efficiency!
        </p>
    </div>
</div>
  )
}

export default HomePage