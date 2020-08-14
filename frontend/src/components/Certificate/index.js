import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.css';
import style from './styles.module.css';
import logo from '../../img/logo.png';

const Certificate = () => {
    const [name, setName] = useState('');
    const [parent, setParent] = useState('');
    const [dob, setDob] = useState('');
    const [birthNumber] = useState(createUUID());

    const history = useHistory();

    useEffect(() => {
        closeModal();
        hideAccepted();
    }, []);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleParentChange(e) {
        setParent(e.target.value);
    }

    function handleDobChange(e) {
        setDob(e.target.value);
    }

    function handleSubmitIssue(e) {
        e.preventDefault();
        issueBirth();
    }

    function handleSubmitVerify(e) {
        e.preventDefault();
        verifyBirth();
    }

    const issueBirth = async () => {
        const birth = {
            name,
            parent,
            dob,
            birthNumber,
        }

        openModal("Scan this code to accept a connectionless credential:");
        hideQRCode();
        showSpinner();
       
        api.post('/certificate/issue', birth).then(async (response) => {
            if (response.status === 200) {
            } else {
                history.push('/wrong', { message: 'Invalid Issue' });
                return function cleanup() { }
            }
            setQRCodeImage(response.data.offerUrl);
            hideSpinner();
            showQRCode();
        });
    }

    const verifyBirth = async () => {
        openModal("Scan this code to verify the Certificate credential:");
        hideQRCode();
        showSpinner();
        let response = await api.post('/certificate/verify');
        let verificationId = response.data.verificationId;
        setQRCodeImage(response.data.verificationRequestUrl);
        hideSpinner();
        showQRCode();
    
        let verification = {state: "Requested"};
        let timedOut = false;
        setTimeout(() => timedOut = true, 1000 * 60);
        while (!timedOut && verification.state === "Requested") {
            let checkResponse = await api.get('/certificate/checkVerification', {params: {verificationId: verificationId }});
            verification = checkResponse.data.verification;
        }
    
        hideQRCode();
        closeModal();
        if (verification.state === "Accepted") {
            showAccepted();
            setAcceptedData(
                verification.proof.birth.attributes["Full Name"],
                verification.proof.birth.attributes["Birth Number"]
            );
        }
    }
      
    function openModal(text) {
        const modal = document.getElementById("modal");
        const modalText = document.getElementById("modal-text");
        modal.style.display = "block";
        modalText.innerText = text;
    }
    
    function closeModal() {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    
    function hideQRCode() {
        const qr = document.getElementById("qrcode");
        qr.style.display = "none";
    }
    
    function showQRCode() {
        const qr = document.getElementById("qrcode");
        qr.style.display = "block";
    }
    
    function setQRCodeImage(url) {
        const qr = document.getElementById("qrcode");
        qr.src = 'https://chart.googleapis.com/chart?cht=qr&chl=' + url + '&chs=300x300&chld=L|1';
    }
        
    function hideSpinner() {
        const spinner = document.getElementById("spinner");
        spinner.style.display = "none";
    }
    
    function showSpinner() {
        const spinner = document.getElementById("spinner");
        spinner.style.display = "block";
    }
    
    function hideAccepted() {
        const accepted = document.getElementById("verification-accepted");
        accepted.style.display = "none";
    }
    
    function showAccepted() {
        const accepted = document.getElementById("verification-accepted");
        accepted.style.display = "block";
    }
        
    function setAcceptedData(name, birthNumber) {
        const acceptedName = document.getElementById("verify-full-name");
        const acceptedNumber = document.getElementById("verify-birth-number");
        acceptedName.value = name;
        acceptedNumber.value = birthNumber;
    }

    function createUUID() {
      return 'xxxx-xx-yxxxxxx'.replace(/[xy]/g, function(c) {
          let r = Math.random() * 12| 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
    } 


    return (
        <div>  
            <div className="container">
              <div className="row">
                <div className={style.img}>
                    <img alt="Identity logo"  src={logo} /> 
                </div>
                <div className="col"></div>
                <div className="col-5">
                    <div className={style.content}>
                        <h4>Create Certificate</h4>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name"
                            value={name}
                            onChange={handleNameChange}
                            required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="parent">Parent</label>
                            <input type="text" className="form-control" id="parent" placeholder="Parent" 
                            value={parent}
                            onChange={handleParentChange}
                            required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birth">Certificate Number</label>
                            <input type="text" className="form-control" id="birth" placeholder="Certificate Number"
                            value={birthNumber}
                            disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" className="form-control" id="dob" placeholder="Date of Birth"
                            value={dob}
                            onChange={handleDobChange}
                            required />
                        </div>
                        <button type="submit" className={style.button} 
                                onClick={handleSubmitIssue}>Issue Certificate</button>     
                    </div>
                </div>

                <div className="col"></div>
                <div className="col-4">
                    <div className={style.content}>
                        <h4>Verify Certificate</h4>
                        <button type="submit" className={style.button} id="verify-submit"  
                                onClick={handleSubmitVerify}>Verify Certificate</button>
                        <div id="verification-accepted">
                            <h4>Verification Accepted!</h4>
                            <div className="form-group">
                                <label htmlFor="verify-full-name">Full Name</label>
                                <input type="text" className="form-control" id="verify-full-name" disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="verify-birth-number">Certificate Number</label>
                                <input type="text" className="form-control" id="verify-birth-number" disabled />
                            </div>
                        </div>
                    </div>
                  </div>
                <div className="col"></div>
            </div>
            </div>
            <div id="modal" className="modal">
                <div id="modal-content">
                    <span id="close-button" onClick={closeModal}>&times;</span>
                    <p id="modal-text"></p>
                    <div className={style.spinner}>
                    <div id="spinner" className="spinner-border centered-spinner" role="status">
                        <span className="sr-only centered-spinner">Loading...</span>
                    </div>
                    <img id="qrcode" src="" alt="QR code"/>
                    </div>
                </div>
            </div>
    </div>

    );
}
export default Certificate;
