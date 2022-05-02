function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'zh-CN',
        includedLanguages: 'kr',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
    setTimeout(function(){
        var select = document.querySelector('select.goog-te-combo');
        select.value    = "kr";
        select.dispatchEvent(new Event('change'));
    },1000)
}