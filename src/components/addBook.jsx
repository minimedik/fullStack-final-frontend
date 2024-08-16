import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';

function AddBook() {

    const [bookTitle, setOnChangeBookTitle] = useState('');
    const [bookAuthor, setOnChangeBookAuthor] = useState('');
    const [description, setOnChangeDescription] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();

        const bookVar = {
            bookTitle, bookAuthor, description
        }

        let url = 'https://full-stack-final-backend.vercel.app/api/v1/book';

        axios
            .post(url, bookVar)
            .then((res) => {
                window.location = '/';
            });
    };



    return (

<div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br /><a className="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <div className='form-group'>
                        <div class="form-group">
                            <input
                                type='text'
                                required
                                placeholder='Title of the Book'
                                className='form-control'
                                name='bookTitle'
                                value={bookTitle}
                                onChange={(e) => setOnChangeBookTitle(e.target.value)}
                            />
                            </div>
                            <div class="form-group">
                            <input
                                placeholder='Author'
                                type='text'
                                required
                                className='form-control'
                                name='bookAuthor'
                                value={bookAuthor}
                                onChange={(e) => setOnChangeBookAuthor(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            <input
                                type='text'
                                
                                className='form-control'
                                placeholder='Describe the book'
                                name='description'
                                value={description}
                                onChange={(e) => setOnChangeDescription(e.target.value)}
                            />
                            
                            </div>
                            <input
                                type='submit'
                                value='Submit'
                                className='btn btn-primary'
                            />
                        </div>
                    </div>
                </form>
          </div>
        </div>
      </div>
    </div>

    )
}

export default AddBook;