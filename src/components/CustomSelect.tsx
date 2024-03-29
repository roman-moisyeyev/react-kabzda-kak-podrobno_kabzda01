import React, {useEffect, useState} from "react";
import styles from './CustomSelect.module.css'

type ItemType = {
    title: string
    value: any
}

type CustomSelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export const CustomSelect = (props: CustomSelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const toggleItems = () => {
        setActive(!active)
    }

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyPressHandler = (e:any) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            props.onChange(props.items[0].value);
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

        return <div className={styles.select}
                    tabIndex={0}
                    onKeyUp={onKeyPressHandler}
        >
        <span className={styles.main}
              onClick={toggleItems}>{selectedItem && selectedItem.title} </span>

            {active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }}
                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                        key={i.value}
                        onClick={() => {
                            onItemClick(i.value)
                        }}
                    >{i.title}</div>)}
                </div>
            }


        </div>
    }
