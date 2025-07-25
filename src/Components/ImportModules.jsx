import React from 'react'
import {name,address} from './ExportModules'
import { add } from './ExportModules'
import greet from './ExportModules'
export default function ImportModules() {
    console.log(add(9,6))
  return (
    <div>
      Import Modules
      <h1>{name}</h1>
      <h1>{address}</h1>
      <h1>{greet("Aradhya")}</h1>
    </div>
  )
}
