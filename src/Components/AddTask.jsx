import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please insert some text.')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <h3>Create a new task</h3>
            <div className='form-control'>
                <label>Task name:</label>
                <input type='text' placeholder='Insert the task name here...' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time:</label>
                <input type='text' placeholder='Insert the Day & Time...' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder:</label>
                <div>
                    <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                </div>
            </div>
            <input type="submit" value='Save new task' className='btn btn-block' />
            <hr style={{marginTop: '5vh'}} />
        </form>
    )
}

export default AddTask