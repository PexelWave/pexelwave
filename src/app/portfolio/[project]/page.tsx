import React from 'react'

type Params = {
    params: {
        project: string
    }
}

const ProjectPage = ({params: { project }}: Params) => {
  return (
    <main className='text-light-foreground pt-[10vh]'>
        <header className='bg-gradient-to-br from-purple to-blue'>
            <div className="container">
                <h1 className="large-title">{project}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae ad neque dolorum optio molestias aliquid fugit id? Unde, sed.</p>
            </div>
        </header>
    </main>
  )
}

export default ProjectPage