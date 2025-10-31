  /*
      Modular JS: small helper functions and an OfferController that controls
      interactions. This keeps things tidy and testable.
    */

    // tiny DOM helpers
    const q = (s, el=document) => el.querySelector(s);
    const qa = (s, el=document) => Array.from(el.querySelectorAll(s));

    // Offer Controller
    const OfferController = (function(){
      const form = q('#offers');
      const cards = qa('.card', form);
      const totalEl = q('#total');
      const addBtn = q('#addToCart');

      // simple pricing map (could be fed by server)
      const pricing = {
        1: {price:10, label: '$10.00 USD'},
        2: {price:18, label: '$18.00 USD'},
        3: {price:24, label: '$24.00 USD'}
      };

      function init(){
        // attach event for radio change
        form.addEventListener('change', handleChange);
        // click on card toggles selection
        cards.forEach(card => card.addEventListener('click', ()=> selectCard(card)));
        // initial selection
        const initial = form.querySelector('input[name=offer]:checked') || form.querySelector('input[name=offer]');
        if(initial) initial.checked = true, handleChange({target: initial});

        addBtn.addEventListener('click', ()=>{
          const selected = getSelectedId();
          alert('Added offer ' + selected + ' to cart — implement real flow.');
        });
      }

      function getSelectedId(){
        const sel = form.querySelector('input[name=offer]:checked');
        return sel ? Number(sel.value) : null;
      }

      function handleChange(e){
        const input = e.target;
        if(input && input.name === 'offer'){
          const id = Number(input.value);
          toggleOpen(id);
          updateTotal(id);
        }
      }

      function selectCard(card){
        // when clicking on the card, select the radio inside
        const radio = card.querySelector('input[type=radio]');
        if(radio && !radio.checked){
          radio.checked = true;
          radio.dispatchEvent(new Event('change', {bubbles:true}));
        }
      }

      function toggleOpen(id){
        cards.forEach(c => {
          const is = Number(c.getAttribute('data-id')) === id;
          c.classList.toggle('open', is);
          const details = q('.details', c);
          if(details) details.setAttribute('aria-hidden', !is);
        });
      }

      function updateTotal(id){
        const p = pricing[id];
        if(p) totalEl.textContent = p.label;
      }

      return {init};
    })();

    // initialize on DOM ready
    document.addEventListener('DOMContentLoaded', ()=> OfferController.init());  /*
      Modular JS: small helper functions and an OfferController that controls
      interactions. This keeps things tidy and testable.
    */

    // tiny DOM helpers
    const q = (s, el=document) => el.querySelector(s);
    const qa = (s, el=document) => Array.from(el.querySelectorAll(s));

    // Offer Controller
    const OfferController = (function(){
      const form = q('#offers');
      const cards = qa('.card', form);
      const totalEl = q('#total');
      const addBtn = q('#addToCart');

      // simple pricing map (could be fed by server)
      const pricing = {
        1: {price:10, label: '$10.00 USD'},
        2: {price:18, label: '$18.00 USD'},
        3: {price:24, label: '$24.00 USD'}
      };

      function init(){
        // attach event for radio change
        form.addEventListener('change', handleChange);
        // click on card toggles selection
        cards.forEach(card => card.addEventListener('click', ()=> selectCard(card)));
        // initial selection
        const initial = form.querySelector('input[name=offer]:checked') || form.querySelector('input[name=offer]');
        if(initial) initial.checked = true, handleChange({target: initial});

        addBtn.addEventListener('click', ()=>{
          const selected = getSelectedId();
          alert('Added offer ' + selected + ' to cart — implement real flow.');
        });
      }

      function getSelectedId(){
        const sel = form.querySelector('input[name=offer]:checked');
        return sel ? Number(sel.value) : null;
      }

      function handleChange(e){
        const input = e.target;
        if(input && input.name === 'offer'){
          const id = Number(input.value);
          toggleOpen(id);
          updateTotal(id);
        }
      }

      function selectCard(card){
        // when clicking on the card, select the radio inside
        const radio = card.querySelector('input[type=radio]');
        if(radio && !radio.checked){
          radio.checked = true;
          radio.dispatchEvent(new Event('change', {bubbles:true}));
        }
      }

      function toggleOpen(id){
        cards.forEach(c => {
          const is = Number(c.getAttribute('data-id')) === id;
          c.classList.toggle('open', is);
          const details = q('.details', c);
          if(details) details.setAttribute('aria-hidden', !is);
        });
      }

      function updateTotal(id){
        const p = pricing[id];
        if(p) totalEl.textContent = p.label;
      }

      return {init};
    })();

    // initialize on DOM ready
    document.addEventListener('DOMContentLoaded', ()=> OfferController.init());