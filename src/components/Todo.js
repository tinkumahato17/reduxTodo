import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import "./Todo.css";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoreducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Add Your List Here </figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder="Add Items..."
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)} />

                        <i className="fa fa-plus" onClick={() => dispatch(addTodo(inputData), setInputData(''))} />
                    </div>
                    <div className='showItems'>
                        {
                            list.map((ele) => {
                                return (
                                    <div className='eachItem' key={ele.id}>
                                        <h3>{ele.data}</h3>
                                        <div>
                                            <i className="far fa-trash-alt" onClick={() => dispatch(deleteTodo(ele.id))} />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="remove All" 
                        onClick={()=> dispatch(removeTodo())}
                        ><span>Check List</span></button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Todo