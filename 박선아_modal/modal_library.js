function makeModal(className, modalContent){ 
    // 모달창 만들기
    const modal = document.createElement("div"); 
    const modalBg = document.createElement("div"); 
    const h1 = document.createElement("h1"); 
    const content = document.createElement("div");
    const closeBtn = document.createElement("button");
    const customTextcontainer = document.createElement("p");

    // TextNodes
    const hlTextNode = document.createTextNode("Hello World!!"); 
    const contentTextNode = document.createTextNode(modalContent); 
    const closeTextNode = document.createTextNode('Close');
    const modalBtnText = document.getElementsByClassName(className);

    // 모달창 요소에 클래스이름 짓기
    modal.className = 'modal'; 
    modalBg.className = 'modal_bg'; 
    content.className = 'modal_content';

    // 모달 창 요소에 textNodes 연결하기, 요소 append하기
    h1.appendChild(hlTextNode);
    content.appendChild(h1);
    
    customTextcontainer.appendChild(contentTextNode);
    content.appendChild(customTextcontainer);
    
    closeBtn.appendChild(closeTextNode);
    content.appendChild(closeBtn);

    modal.appendChild(modalBg);
    modal.appendChild(content);
    modal.classList.add("hidden");

    const openModal =()=>{
        modal.classList.remove("hidden");
    }
    const closeModal =()=>{
        modal.classList.add("hidden");
    }

    modalBg.addEventListener("click", closeModal); 
    closeBtn.addEventListener("click", closeModal); 
    className.addEventListener("click", openModal);

 
    document.body.appendChild(modal);
}