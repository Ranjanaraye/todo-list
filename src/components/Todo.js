import React, { useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actios/index'
import { useDispatch, useSelector } from 'react-redux'
import '../css/Style.css'

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch();
    const list = useSelector((state) => state.TodoReducer.list)
    return (
        <div className='maindiv'>
            <center className='center'>
                <h3>Add ToDo List</h3>
            </center>
            <div className='row'>

                <div className='col mainInput'>
                    <input type='text' className='InpField' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    <button className='btnadd btn btn-primary' onClick={() => dispatch(addTodo(inputData), setInputData(''))}>Add </button>
                </div>
                <div >
                    {
                        list.map((elem) => {
                            return (
                                <div className='maindeldiv'>
                                    <div key={elem.id}>

                                        <input className='InpField' value={elem.data} readOnly />
                                        <button className='btnadd btn btn-danger'  onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='removediv'>
                    {
                        list.length > 1 && (
                            <button className='btnremove btn btn-warning' onClick={() => dispatch(removeTodo())}>Remove All</button>
                        )
                    }
                   
                </div>
            </div>
        </div>
    )

}

export default Todo;