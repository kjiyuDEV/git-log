import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfirmModalHeader from './ConfirmModalHeader';
import { TYPE } from '@/app/redux/types';

const ConfirmModal = () => {
    const dispatch = useDispatch();
    const { confirmModal } = useSelector((state) => {
        return {
            confirmModal: state.modals.confirmModal,
        };
    });

    const handleConfirm = () => {
        confirmModal.data.handleConfirm();
    };

    const handleCancel = () => {
        if (confirmModal.data.handleCancel) {
            confirmModal.data.handleCancel();
        } else {
            dispatch({
                type: TYPE.CLOSE_CONFIRM_MODAL,
            });
        }
    };
    return (
        <div className="modal_wrap">
            <div className="modal">
                <ConfirmModalHeader />
                <div className="btn_wrap">
                    <button onClick={handleConfirm}>{confirmModal.data.txtConfirm}</button>
                    <button onClick={handleCancel}>{confirmModal.data.txtCancel}</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
