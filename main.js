document.addEventListener("DOMContentLoaded", function() {
    // URLのパラメータから値を取得する関数
    function getParamFromUrl(paramName) {
        const url = new URL(window.location.href);
        return url.searchParams.get(paramName);
    }

    // 保存関数
    function saveMemo(text) {
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "memo.txt";
        link.click();
    }

    // URLからメモ内容を取得
    const content = getParamFromUrl("memo");
    if (content) {
        // 改行を含むメモを保存
        saveMemo(content);
    }
});
