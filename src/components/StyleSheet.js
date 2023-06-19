import React from 'react'
import './myStyleSheet.css'
import styles from './style.module.css'

export default function StyleSheet() {
    //approach 1
    //create a .css file and import it name.css (with extension)and use className ..etc

    //make a variable and assign style as key value pair and assign it to the style property

    //approach3
    //create a file name.module.css import it style from ' file path(with extension), and use as style.class/id ..

    //approach 4
    //CSS libraries like Bootstrap, Tailwind, etc
    let heading={
        color:"red"
    }
  return (
    <div className={styles.secondary}>StyleSheet</div>
  )
}
