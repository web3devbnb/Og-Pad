import { useEffect, useRef, useState } from "react";
import Select from "./Select";

const hours = [
    { title: "01", selected: true, id: 0 },
    { title: "02", selected: false, id: 1 },
    { title: "03", selected: false, id: 2 },
    { title: "04", selected: false, id: 3 },
    { title: "05", selected: false, id: 4 },
    { title: "06", selected: false, id: 5 },
    { title: "07", selected: false, id: 6 },
    { title: "08", selected: false, id: 7 },
    { title: "09", selected: false, id: 8 },
    { title: "10", selected: false, id: 9 },
    { title: "11", selected: false, id: 10 },
    { title: "12", selected: false, id: 11 },
];

const minutes = [
    { title: "01", selected: true, id: 0 },
    { title: "02", selected: false, id: 1 },
    { title: "03", selected: false, id: 2 },
    { title: "04", selected: false, id: 3 },
    { title: "05", selected: false, id: 4 },
    { title: "06", selected: false, id: 5 },
    { title: "07", selected: false, id: 6 },
    { title: "08", selected: false, id: 7 },
    { title: "09", selected: false, id: 8 },
    { title: "10", selected: false, id: 9 },
    { title: "11", selected: false, id: 10 },
    { title: "12", selected: false, id: 11 },
    { title: "13", selected: false, id: 12 },
    { title: "14", selected: false, id: 13 },
    { title: "15", selected: false, id: 14 },
    { title: "16", selected: false, id: 15 },
    { title: "17", selected: false, id: 16 },
    { title: "18", selected: false, id: 17 },
    { title: "19", selected: false, id: 18 },
    { title: "20", selected: false, id: 19 },
    { title: "21", selected: false, id: 20 },
    { title: "22", selected: false, id: 21 },
    { title: "23", selected: false, id: 22 },
    { title: "24", selected: false, id: 23 },
    { title: "25", selected: false, id: 24 },
    { title: "26", selected: false, id: 25 },
    { title: "27", selected: false, id: 26 },
    { title: "28", selected: false, id: 27 },
    { title: "29", selected: false, id: 28 },
    { title: "30", selected: false, id: 29 },
    { title: "31", selected: false, id: 30 },
    { title: "32", selected: false, id: 31 },
    { title: "33", selected: false, id: 32 },
    { title: "34", selected: false, id: 33 },
    { title: "35", selected: false, id: 34 },
    { title: "36", selected: false, id: 35 },
    { title: "37", selected: false, id: 36 },
    { title: "38", selected: false, id: 37 },
    { title: "39", selected: false, id: 38 },
    { title: "40", selected: false, id: 39 },
    { title: "41", selected: false, id: 40 },
    { title: "42", selected: false, id: 41 },
    { title: "43", selected: false, id: 42 },
    { title: "44", selected: false, id: 43 },
    { title: "45", selected: false, id: 44 },
    { title: "46", selected: false, id: 45 },
    { title: "47", selected: false, id: 46 },
    { title: "48", selected: false, id: 47 },
    { title: "49", selected: false, id: 48 },
    { title: "50", selected: false, id: 49 },
    { title: "51", selected: false, id: 50 },
    { title: "52", selected: false, id: 51 },
    { title: "53", selected: false, id: 52 },
    { title: "54", selected: false, id: 53 },
    { title: "55", selected: false, id: 54 },
    { title: "56", selected: false, id: 55 },
    { title: "57", selected: false, id: 56 },
    { title: "58", selected: false, id: 57 },
    { title: "59", selected: false, id: 58 },
];

export default function TimeSelect({ className, changeTime, opened, setOpened }) {
    const wrapper = useRef(null);
    const [bottom, setBottom] = useState(false);

    const [selectedTime, setSelectedTime] = useState({
        hours: "00",
        minutes: "00",
        mode: "AM"
    });


    useEffect(() => {
        function handleBottomPosition() {
            setBottom(((window.innerHeight - window.scrollY - wrapper.current.getBoundingClientRect().bottom) - 300) < 0);
        }

        handleBottomPosition();

        function handleDocumentClick(e) {
            if (opened && !e.target.closest('.time')) {
                setOpened(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        window.addEventListener('resize', handleBottomPosition);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
            window.removeEventListener('resize', handleBottomPosition);
        }
    }, [opened, setOpened]);

    return (
        <div className={"time " + (className ? className : "") + (opened ? " opened" : "") + (bottom ? " bottom" : "")} ref={wrapper}>
            <div className="time__wrapper">
                <div className="time__header">
                    <button className={"time__header-button" + (selectedTime.mode === "AM" ? " active" : "")} onClick={() => setSelectedTime({ ...selectedTime, mode: "AM" })}>AM</button>
                    <button className={"time__header-button" + (selectedTime.mode === "PM" ? " active" : "")} onClick={() => setSelectedTime({ ...selectedTime, mode: "PM" })}>PM</button>
                </div>
                <div className="time__columns">
                    <div className="time__column time__column--1">
                        <h4 className="time__title">Hours</h4>
                        <Select callback={(index) => setSelectedTime({ ...selectedTime, hours: hours[index].title })} list={hours} className="select--time" />
                    </div>
                    <div className="time__column time__column--2">
                        <h4 className="time__title">Minutes</h4>
                        <Select callback={(index) => setSelectedTime({ ...selectedTime, minutes: minutes[index].title })} list={minutes} className="select--time" />
                    </div>
                </div>
            </div>
            <div className="time__footer">
                <button className="time__footer-button" onClick={() => setOpened(false)}>Cancel</button>
                Time until
                <button className="time__footer-button" onClick={() => {
                    changeTime(selectedTime.hours, selectedTime.minutes, selectedTime.mode);
                    setOpened(false)
                }}>Submit</button>
            </div>
        </div>
    );
}
