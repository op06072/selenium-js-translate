window.onload = function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'zh-CN',
        includedLanguages: 'ko',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDiaplay: true
    }, 'google_translate_element');
    setTimeout(function(){
        var select = document.querySelector('select.goog-te-combo');
        select.value    = "ko";
        select.dispatchEvent(new Event('change'));
    },1000)
}