// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import 'shoelace-css/source/css/shoelace.css'
import 'font-awesome/css/font-awesome.css'
import 'react-mde/lib/styles/react-mde.css'
import 'react-mde/lib/styles/react-mde-command-styles.css'
import 'react-mde/lib/styles/markdown-default-theme.css'
import '../styles/notetaker.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Notetaker from '../components/Notetaker';
import notes from "../data/notes.json";

const Hello = props => (
  <div>Hello {props.name}!</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Notetaker />,
    document.getElementById("mount")
  )
})
