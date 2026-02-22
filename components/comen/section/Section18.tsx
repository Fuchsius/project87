import React from 'react'
import Title2 from '../title/Title2'
import { Button } from '@/components/comen/button'

export default function Section18({title, button, classNameButton}: {title: string, button: string, classNameButton?: string}) {
  return (
    <div>
        <div className='w-full'>
            <Title2 title={title} className='text-center'/>
            <div className='w-full flex items-center justify-center mt-4'>
                <Button variant="default" size={"lg"} className={` ${classNameButton}`} >
                    {button}
                </Button>
            </div>
        </div>
    </div>
  )
}
