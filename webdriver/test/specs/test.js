describe('form check', () => {
    it('テスト入力', () => {
        browser.url('/');
        console.log(browser.getTitle());
        browser
            .addValue('#inputState1', 'Test1');
        browser.pause(1000)
        browser.setValue('#inputState2', 'te');
    });

    it('入力チェック', () => {
        let state1 = $('#inputState1').getAttribute('class');
        console.log(state1)
        let state2 = $('#inputState2').getAttribute('class');
        console.log(state2)

        browser.pause(3000)
    })
});

/**
 * urlをここで設定する場合
 */
let url = 'https://www.google.co.jp';
describe('googleへ接続', () => {
    it('get title', () => {
        browser.url(url);
        console.log(browser.getTitle());
    })
})