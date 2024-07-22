import React, { useState } from "react";
import "./CourtDetailsBody.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import IMG from "../../Assets/download.jpeg";
import edit from "../../Assets/edit.svg";
import files from "../../Assets/files.svg";
import add from "../../Assets/add.svg";
import Modal from "../Common/Modal/Modal";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar, DateRange } from "react-date-range";
import calender from "../../Assets/calender.svg";
import close from '../../Assets/close.svg'
import forward from '../../Assets/forward.svg'
import Custominput from "Components/Common/Custominput/Custominput";

function CourtDetailsBody() {
    const[opend,setOpend]= useState(false)
  const [calenderOpen, setCalenderOpen] = useState(false);
  const [openTimeslot, setTimeslot] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  const closeList =(e)=>{
     e.stopPropagation()
     setOpend(false)
  }
  return (
    <div className="details-page">
      <div className="details-image-box">
        <img className="details-image" src={IMG} alt="" />
        <div className="details-image-content">
          <div className="d-flex justify-content-center d-column">
            <div className="text-white mx-5">
              <h3>Court Name</h3>
            </div>
            <div className="text-white mx-5">
              <p>location</p>
            </div>
            <div className="d-flex align-self-end gap-3 mx-3">
              <button>
                <img src="" alt="" height={"20px"} />
                BOOK
              </button>
              <button>
                <img src={edit} alt="" height={"20px"} />
              </button>
              <button>
                <img src={files} alt="" height={"20px"} />
              </button>
              <button onClick={() => setTimeslot(true)}>
                <img src={add} alt="" height={"20px"} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReactQuill readOnly={true} theme="bubble" className="" value={"abcd"} />
      {openTimeslot && (
        <Modal
          heading={"Adding New Time Slot Data"}
          closeModal={() => setTimeslot(false)}
        >
          <div className="time-slot-select-modal p-3">
            <label htmlFor="">Select date range</label>
            <img
              src={calender}
              alt=""
              height={"20px"}
              onClick={() => {
                setCalenderOpen(true);
              }}
              className="m-2"
            />
                     <div className="d-flex gap-2 align-items-center">
                               <div className="timeslot-date flex-grow-1 border border-1 rounded-2 p-2"> date </div>
                               <img src={forward} alt="" height={'20px'}/>
                               <div  className="timeslot-date flex-grow-1 border border-1 rounded-2 p-2">  date </div>
                     </div>
            {calenderOpen && (
              <div className="calender-box">
                  <img
                  src={close}
                  alt=" "
                  height={"30px"}
                  className="modal-close-icon"
                  onClick={()=>{setCalenderOpen(false)}}
                />
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDateRange(item.selection)}
                  moveRangeOnFirstSelection={false}
                  ranges={[dateRange]}
                />

              

                <div className="d-flex justify-content-end mt-2 gap-3 p-2">
                  <button className="common-button bg-black text-white">
                    Cancel
                  </button>
                  <button className="common-button">Select</button>
                </div>
              </div>
            )}
            <div className="mt-2">
                <Custominput name={'cost'} label={'Cost'} value={null} />
            </div>
            <div className="range-label position-relative mt-3 p-2" onClick={()=>{setOpend(true)}}>
                Select Slots
               {opend && <ul className="slot-list">
                    <li onClick={closeList}>abs</li>
                    <li onClick={closeList}>nmvnm</li>
                    <li onClick={closeList}>mv</li>
                    <li onClick={closeList}>msa</li>
                    <li onClick={closeList}>keakl</li>
                </ul>}

            </div>
            <div className="d-flex justify-content-end mt-2 gap-3 p-2">
            <button className="common-button bg-black text-white">
                    Cancel
                  </button>
                  <button className="common-button">Create</button>
                </div>
            </div>
          
        </Modal>
      )}
    </div>
  );
}

export default CourtDetailsBody;
