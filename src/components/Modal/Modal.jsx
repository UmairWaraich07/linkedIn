import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/modalSlice";
import { logout } from "../../features/user/userSlice";
import { auth } from "../../firebase";

function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure you want to log out?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(logout());
              auth.signOut();
              dispatch(closeModal());
            }}
          >
            Yes
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            No
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
