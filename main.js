document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.first-card input');
    const warningMsg = document.querySelectorAll('.warning')
    const emailInput = document.getElementById('e-mail')
    const phoneInput = document.getElementById('phone-no')
    const formInputs = document.querySelectorAll('.form-input')
    const firstBtn = document.querySelector('.btn-1')
    const nextBtn = document.querySelectorAll('.next')
    const previousBtn = document.querySelectorAll('.prev')
    const steps = document.querySelectorAll('.step-number')
    const plans = document.querySelectorAll('.plan')
    let servicePicker = document.querySelectorAll('.picker')
    let serviceCard = document.querySelectorAll('.service')
    let cards = document.querySelectorAll('.card')
    let summaryPlan = document.querySelector('.summary-plan')
    let toggleBtn = document.querySelector('.toggle-btn')
    let duration = document.querySelector('.duration')
    let servicePrice = document.querySelectorAll('.price')
    let summaryServicePrice = document.querySelector('.summary-service-price')
    let addOnSummary = document.querySelectorAll('.addon-service')
    let servicePriceParagraph = document.querySelectorAll('.service-price p')
    let changeBtn = document.querySelector('.change-btn')
    let monthly = true
    let pageCounter = 0
    console.log('numbber of next butoons: ', nextBtn.length);
    console.log(previousBtn.length);
    console.log('page counter is: ', pageCounter);
    console.log('number of steps: ', steps.length);
    console.log('number of plans: ', plans.length);
    console.log('service price: ', servicePrice.length);
    console.log('addon summary: ', addOnSummary.length);
    servicePriceParagraph.forEach(paragraph=>{
        console.log(paragraph);
    })

    // servicePrice.forEach(price=> console.log(price.innerText))

        // first page actions
    function showWarningMsg(){
        inputs.forEach((input, index) => {
            input.addEventListener('blur', ()=>{
                if(input.value.trim() == ''){
                    warningMsg[index].style.display = 'block'
                }
                else{
                    warningMsg[index].style.display = 'none'
                }
            })
        })
    }
    showWarningMsg()
    firstBtn.addEventListener('click', function(e){
            let allFilled = true
            e.preventDefault()
            inputs.forEach((input, index)=> {
                if(input.value.trim()==''){
                    warningMsg[index].style.display = 'block'
                    warningMsg[index].innerHTML = 'This field is required'
                    allFilled = false
                }
                else{
                    warningMsg[index].style.display = 'none'
                }
            })
            if(allFilled){
                if(checkEmailValidity() && checkPhoneValidity()){
                    pageCounter++
                    formInputs[0].classList.remove('active');
                    console.log('page counter on first btn click is: ',pageCounter);
                    formInputs[1].classList.add('active');
                    steps[0].classList.add('active')
                    window.scrollTo({
                        top: 0,
                        behavior:'smooth'
                    })
                }else{
                    if (!checkEmailValidity()) {
                        warningMsg[1].style.display = 'block';
                        warningMsg[1].innerHTML = 'Invalid E-mail';
                        console.log('Email regex failed');
                    }
                    if (!checkPhoneValidity()) {
                        warningMsg[2].innerHTML = 'Invalid Phone-no';
                        warningMsg[2].style.display = 'block';
                        console.log('Phone regex failed');
                    }
                }
            }
        })
    function showInvalidEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let emailValue = emailInput.value.trim();
        
        if (emailValue === '') {
            warningMsg[1].innerHTML = 'This field is required';
            warningMsg[1].style.display = 'block';
            console.log('empty');
            
        } else if (emailRegex.test(emailValue)) {
            warningMsg[1].style.display = 'none';
            console.log('reggex passed');
            
        } else {
            warningMsg[1].style.display = 'block';
            warningMsg[1].innerHTML = 'Invalid E-mail';
            console.log('regex failed');
        }
    }    
    function showInvalidNumber() {
        const phoneRegex = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
    
        let phoneNumber = phoneInput.value.trim();  // Trim spaces
    
        if (phoneNumber ==='') {
            warningMsg[2].innerHTML = 'This field is required';
            warningMsg[2].style.display = 'block';
            console.log('empty');
        } else if (phoneRegex.test(phoneNumber)) {
            warningMsg[2].style.display = 'none';
            console.log('reggex passed');
        } else {
            warningMsg[2].innerHTML = 'Invalid Phone-no';
            warningMsg[2].style.display = 'block';
            console.log('regex failed');
        }
    }    
    function checkEmailValidity(){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let emailValue = emailInput.value.trim()
        if(emailRegex.test(emailValue)){
            return true
        }else{
            false
        }
    }
    function checkPhoneValidity() {
        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/;
    
        if (phoneRegex.test(phoneValue)) {
            return true;
        } else {
            return false;
        }
    }
    inputs.forEach(input => {
        input.addEventListener('focus', ()=>{
            setTimeout(() => {
                input.scrollIntoView({behaviour: 'smooth'})
            }, 300);
        })
    })
    emailInput.addEventListener('blur', showInvalidEmail);
    phoneInput.addEventListener('blur', showInvalidNumber);
    // first page actions end

    // next and prev button actions
    nextBtn.forEach(next => {
        next.addEventListener('click', function(e){
            e.preventDefault()
            steps[pageCounter].classList.add('active')
            pageCounter++
            console.log('next btn clicked and page counter is: ', pageCounter);
            
            formInputs.forEach(formInput =>{
                formInput.classList.remove('active')
            })
            formInputs[pageCounter].classList.add('active')
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        })
    })
    previousBtn.forEach(prev => {
        prev.addEventListener('click',function(e){
            e.preventDefault()
            if(pageCounter<=0){
                pageCounter = 0
            }
            pageCounter--
            console.log('prev btn clicked and page counter is: ', pageCounter)
            formInputs.forEach(formInput =>{
                formInput.classList.remove('active')
            })
            formInputs[pageCounter].classList.add('active')
            steps[pageCounter].classList.remove('active')
        })
    })
    // next and prev buttons actions end

    // toggle MONTH/YEAR
// toggle MONTH/YEAR
toggleBtn.addEventListener('click', function() {
    monthly = !monthly;

    if (!monthly) {  // Switching to yearly
        duration.innerText = '(Yearly)';
        
        cards.forEach((card, index) => {
            if (card.classList.contains('selected')) {
                let yearlyPrice = document.querySelectorAll('.yearly-price');
                summaryServicePrice.innerHTML = yearlyPrice[index].innerHTML;
                console.log(summaryServicePrice.innerHTML);
            }
        });

        let summarizedPrice = document.querySelectorAll('.summary-price');
        summarizedPrice.forEach(price => {
            let priceText = price.textContent.replace('+$', '').replace('/mo', '').replace('/yr', '');  // Clear both /mo and /yr
            let yearlyPriceText = parseFloat(priceText) * 10;
            price.textContent = `+$${yearlyPriceText}/yr`;
        });

        let servicePriceParagraph = document.querySelectorAll('.service-price p');
        servicePriceParagraph.forEach(paragraph => {
            let addOnPrice = paragraph.textContent.replace('+$', '').replace('/mo', '').replace('/yr', '');  // Clear both /mo and /yr
            let yearlyAddOnText = parseFloat(addOnPrice) * 10;
            paragraph.textContent = `+$${yearlyAddOnText}/yr`;
        });

    } else {  // Switching to monthly
        duration.innerText = '(Monthly)';
        
        cards.forEach((card, index) => {
            if (card.classList.contains('selected')) {
                let monthlyPrice = document.querySelectorAll('.monthly-price');
                summaryServicePrice.innerHTML = monthlyPrice[index].innerHTML;
                console.log(summaryServicePrice.innerHTML);
            }
        });

        let summarizedPrice = document.querySelectorAll('.summary-price');
        summarizedPrice.forEach(price => {
            let priceText = price.textContent.replace('+$', '').replace('/yr', '').replace('/mo', '');  // Clear both /yr and /mo
            let monthlyPriceText = parseFloat(priceText) / 10;
            price.textContent = `+$${monthlyPriceText}/mo`;
        });

        let servicePriceParagraph = document.querySelectorAll('.service-price p');
        servicePriceParagraph.forEach(paragraph => {
            let addOnPrice = paragraph.textContent.replace('+$', '').replace('/yr', '').replace('/mo', '');  // Clear both /yr and /mo
            let monthlyAddOnText = parseFloat(addOnPrice) / 10;
            paragraph.textContent = `+$${monthlyAddOnText}/mo`;
        });
    }

    console.log(monthly);
});


    // services/addons
    serviceCard.forEach((service, index) =>{
        service.addEventListener('click', function(){
            service.classList.toggle('active')
            servicePicker[index].classList.toggle('picked')
            if(service.classList.contains('active')){
                addOnSummary[index].style.display ='flex'
            }else{
                addOnSummary[index].style.display ='none'
            }
        })
    })
    
    // cards/plan
    cards.forEach((card, index) =>{
        card.addEventListener('click', ()=>{
            cards.forEach(card => card.classList.remove('selected'))
            card.classList.add('selected')
            summaryPlan.innerText = plans[index].innerText
            console.log(monthly);
            if(monthly){
                let monthlyPrice = document.querySelectorAll('.monthly-price')
                summaryServicePrice.innerHTML = monthlyPrice[index].innerHTML
                console.log(summaryServicePrice.innerHTML);
                
            }else{
                let yearlyPrice = document.querySelectorAll('.yearly-price')
                summaryServicePrice.innerHTML = yearlyPrice[index].innerHTML
                console.log(summaryServicePrice.innerHTML);
            }
        })
    })


    function getNumber(textelement){
        let addOnPrice = textelement.textContent.replace('+$', '')
        let number = parseFloat(addOnPrice);
        console.log(number);
        return number
    }
    function getTotalSum(){
        let total = 0
        array.forEach(number => {
            total += number
        })
        return total
    }
    let array  = []
    nextBtn[1].addEventListener('click', function(){
        let addonSummaryPrice = document.querySelectorAll('.summary-price')
        let finalPrice = document.querySelector('.total-price')
        array = []
        console.log(summaryServicePrice.textContent);
        
        array.push(getNumber(summaryServicePrice))
        serviceCard.forEach((service, index) => {
            if(service.classList.contains('active')){
                let priceValue = getNumber(addonSummaryPrice[index])
                array.push(priceValue)
            }
        })
        console.log('new array is: ', array);
        let total = getTotalSum()
        if(monthly){
            finalPrice.textContent = `+$${total}/mo`
            document.querySelector('.total-word').textContent =`Total (per month)`
        }else{
            finalPrice.textContent = `+$${total}/yr`
            document.querySelector('.total-word').textContent =`Total (per Year)`
        }
    })
    changeBtn.addEventListener('click', function(){
        pageCounter = 1
        formInputs.forEach(form =>{
            form.classList.remove('active')
        })
        formInputs[1].classList.add('active')
        steps[2].classList.remove('active')
    })
    


})

