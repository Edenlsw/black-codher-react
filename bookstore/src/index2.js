import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import BookCounter from './BookCounter';
const element = <Fragment>
<h1>Welcome to My Library</h1>
<BookCounter library={{name:"Sarah",theme:"Modern"}}/>
</Fragment>;
ReactDOM.render(element,document.getElementById('root'));