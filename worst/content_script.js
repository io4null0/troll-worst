(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // B6
    const base64Script = "KCgpID0+IHsKZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigiRE9NQ29udGVudExvYWRlZCIsICgpID0+IHsKY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CmNvbnRhaW5lci5pbm5lckhUTUwgPSBgCjxkaXYgaWQ9ImNvbnRyb2xQYW5lbCIgc3R5bGU9Igpwb3NpdGlvbjogZml4ZWQ7CnRvcDogMjBweDsKcmlnaHQ6IDIwcHg7CnotaW5kZXg6IDk5OTk5OwpiYWNrZ3JvdW5kOiBibGFjazsKcGFkZGluZzogMTVweDsKYm9yZGVyOiAycHggc29saWQgIzMyY2QzMjsKYm9yZGVyLXJhZGl1czogMTBweDsKYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTsKZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwpjb2xvcjogIzMyY2QzMjsKdGV4dC1hbGlnbjogY2VudGVyOwp0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOwp3aWR0aDogMzAwcHg7CnBvaW50ZXItZXZlbnRzOiBhdXRvOyAvKiDjgq/jg6rjg4Pjgq/jgpLmnInlirnljJYgKi8KIj4KPGRpdiBpZD0ibG9nb1RleHQiIHN0eWxlPSIKZm9udC1zaXplOiAzNnB4Owpmb250LXN0eWxlOiBpdGFsaWM7CmZvbnQtd2VpZ2h0OiBib2xkOwpjb2xvcjogI0ZGMDAwMDsKdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMjU1LCAwLCAwLCAwLjgpLCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMC42KTsKYW5pbWF0aW9uOiBibGluayAycyBpbmZpbml0ZTsKbWFyZ2luLWJvdHRvbTogMTBweDsKIj4KV09SU1QKPC9kaXY+CjxoMyBzdHlsZT0ibWFyZ2luOiAwIDAgMTBweDsgY29sb3I6ICMzMmNkMzI7Ij7jgrnjgq/jg6rjg5fjg4jliLblvqHjg5Hjg43jg6s8L2gzPgo8cCBpZD0ic3RhdHVzIiBzdHlsZT0ibWFyZ2luOiA1cHggMDsiPuOCueODhuODvOOCv+OCuTog5YGc5q2i5LitPC9wPgo8YnV0dG9uIGlkPSJ0b2dnbGVTY3JpcHQiIHN0eWxlPSIKYmFja2dyb3VuZDogIzMyY2QzMjsKY29sb3I6IGJsYWNrOwpib3JkZXI6IG5vbmU7CmJvcmRlci1yYWRpdXM6IDVweDsKcGFkZGluZzogMTBweCAyMHB4Owpmb250LXNpemU6IDE2cHg7CmZvbnQtd2VpZ2h0OiBib2xkOwpjdXJzb3I6IHBvaW50ZXI7CmJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCAyMDUsIDUwLCAwLjQpOwp0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOwp3aWR0aDogMTAwJTsKIj7jgrnjgq/jg6rjg5fjg4jjgpLplovlp4s8L2J1dHRvbj4KPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDogMTVweDsiPgo8bGFiZWwgZm9yPSJpbnRlcnZhbCIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7Ij7lrp/ooYzplpPpmpQgKG1zKTo8L2xhYmVsPgo8aW5wdXQgdHlwZT0icmFuZ2UiIGlkPSJpbnRlcnZhbCIgbWluPSIxMDAwIiBtYXg9IjEwMDAwIiB2YWx1ZT0iMzAwMCIgc3RlcD0iNTAwIiBzdHlsZT0id2lkdGg6IDEwMCU7Ij4KPHNwYW4gaWQ9ImludGVydmFsVmFsdWUiPjMwMDA8L3NwYW4+IG1zCjwvZGl2Pgo8YnV0dG9uIGlkPSJyZXNldFVJIiBzdHlsZT0iCm1hcmdpbi10b3A6IDE1cHg7CmJhY2tncm91bmQ6IGJsYWNrOwpjb2xvcjogIzMyY2QzMjsKYm9yZGVyOiAycHggc29saWQgIzMyY2QzMjsKYm9yZGVyLXJhZGl1czogNXB4OwpwYWRkaW5nOiAxMHB4Owpmb250LXNpemU6IDE0cHg7CmZvbnQtd2VpZ2h0OiBib2xkOwpjdXJzb3I6IHBvaW50ZXI7CndpZHRoOiAxMDAlOwoiPuODquOCu+ODg+ODiDwvYnV0dG9uPgo8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiAxNXB4OyI+CjxoNCBzdHlsZT0iY29sb3I6ICMzMmNkMzI7Ij7jgqvjgrnjgr/jg6Djg4bjgq3jgrnjg4g8L2g0Pgo8ZGl2Pgo8bGFiZWwgZm9yPSJjdXN0b21UZXh0IiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDVweDsiPumAgeS/oeODhuOCreOCueODiOOCkue3qOmbhjwvbGFiZWw+CjxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0iY3VzdG9tVGV4dCIgc3R5bGU9IndpZHRoOiAxMDAlOyBwYWRkaW5nOiA1cHg7IiBwbGFjZWhvbGRlcj0i44OG44Kt44K544OI44KS5YWl5Yqb4oCmIj4KPC9kaXY+CjwvZGl2Pgo8YnV0dG9uIGlkPSJtaW5pbWl6ZUJ1dHRvbiIgc3R5bGU9Igpwb3NpdGlvbjogYWJzb2x1dGU7CnRvcDogMTBweDsKcmlnaHQ6IDEwcHg7CmJhY2tncm91bmQ6ICNmZjAwMDA7CmNvbG9yOiB3aGl0ZTsKYm9yZGVyOiBub25lOwpib3JkZXItcmFkaXVzOiA1MCU7CndpZHRoOiAzMHB4OwpoZWlnaHQ6IDMwcHg7CmZvbnQtc2l6ZTogMThweDsKY3Vyc29yOiBwb2ludGVyOwpwYWRkaW5nOiAwOwp6LWluZGV4OiAxMDAwMTsKIj7igJM8L2J1dHRvbj4KPHAgc3R5bGU9IgptYXJnaW4tdG9wOiAxNXB4Owpmb250LXNpemU6IDEycHg7CmNvbG9yOiAjYWFhYWFhOwoiPuijveS9nOiAhTogYWFhL3RyaXA6ZmVlZGVyPC9wPgo8L2Rpdj4KYDsKCmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTsKc3R5bGUudGV4dENvbnRlbnQgPSBgCkBrZXlmcmFtZXMgYmxpbmsgewowJSwgMTAwJSB7Cm9wYWNpdHk6IDE7CnRleHQtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDI1NSwgMCwgMCwgMC44KSwgMCAwIDEwcHggcmdiYSgyNTUsIDAsIDAsIDAuNik7Cn0KNTAlIHsKb3BhY2l0eTogMC41Owp0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgyNTUsIDAsIDAsIDAuNCksIDAgMCA1cHggcmdiYSgyNTUsIDAsIDAsIDAuMyk7Cn0KfQpgOwpkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTsKZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpOwoKLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844Go44Ot44K444OD44Kv77yI5YWD44Gu44Kz44O844OJ44KS57at5oyB77yJCmxldCBpbnRlcnZhbElkID0gbnVsbDsKbGV0IGludGVydmFsVGltZSA9IDMwMDA7CmxldCBjdXN0b21UZXh0VmFsdWUgPSAiOsy3zJ/MrMyfzLPMls2OzYfMr82WzJnMmMyLzL3MgMyUzIfMlM2CzIvNi8yDzYvNm82QzYLMj82RzI3NkcyQzInMgcyIzIHMiMyBeyNGRjAwMDA6JycnV09SU1QnJyd9Osy3zJ/MrMyfzLPMls2OzYfMr82WzJnMmMyLzL3MgMyUzIfMlM2CzIvNi8yDzYvNm82QzYLMj82RzI3NkcyQzInMgcyIzIHMiMyBIjsKCmNvbnN0IHVwZGF0ZVN0YXR1cyA9IChzdGF0dXMpID0+IHsKY29uc3Qgc3RhdHVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzdGF0dXMiKTsKc3RhdHVzRWxlbWVudC50ZXh0Q29udGVudCA9IGDjgrnjg4bjg7zjgr/jgrk6ICR7c3RhdHVzfWA7Cn07Cgpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgidG9nZ2xlU2NyaXB0IikuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCBmdW5jdGlvbiAoKSB7CmNvbnN0IGJ1dHRvbiA9IHRoaXM7CgppZiAoaW50ZXJ2YWxJZCkgewpjbGVhckludGVydmFsKGludGVydmFsSWQpOwppbnRlcnZhbElkID0gbnVsbDsKYnV0dG9uLnRleHRDb250ZW50ID0gIuOCueOCr+ODquODl+ODiOOCkumWi+WniyI7CmJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gIiMzMmNkMzIiOwpidXR0b24uc3R5bGUuY29sb3IgPSAiYmxhY2siOwp1cGRhdGVTdGF0dXMoIuWBnOatouS4rSIpOwp9IGVsc2UgewppbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gewpjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjcG9zdF9mb3JtX3NpbmdsZSIpOwpjb25zdCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiI3Bvc3RfYnRuIik7CgppZiAoaW5wdXRFbGVtZW50ICYmIGJ1dHRvbkVsZW1lbnQpIHsKaW5wdXRFbGVtZW50LnZhbHVlID0gY3VzdG9tVGV4dFZhbHVlICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpOwpidXR0b25FbGVtZW50LmNsaWNrKCk7Cn0KfSwgaW50ZXJ2YWxUaW1lKTsKYnV0dG9uLnRleHRDb250ZW50ID0gIuOCueOCr+ODquODl+ODiOOCkuWBnOatoiI7CmJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gImJsYWNrIjsKYnV0dG9uLnN0eWxlLmNvbG9yID0gIiMzMmNkMzIiOwp1cGRhdGVTdGF0dXMoIumWi+Wni+S4rSIpOwp9Cn0pOwoKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImludGVydmFsIikuYWRkRXZlbnRMaXN0ZW5lcigiaW5wdXQiLCBmdW5jdGlvbiAoKSB7CmludGVydmFsVGltZSA9IHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKTsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImludGVydmFsVmFsdWUiKS50ZXh0Q29udGVudCA9IGludGVydmFsVGltZTsKfSk7Cgpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgicmVzZXRVSSIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCkgPT4gewppZiAoaW50ZXJ2YWxJZCkgewpjbGVhckludGVydmFsKGludGVydmFsSWQpOwppbnRlcnZhbElkID0gbnVsbDsKfQpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgidG9nZ2xlU2NyaXB0IikudGV4dENvbnRlbnQgPSAi44K544Kv44Oq44OX44OI44KS6ZaL5aeLIjsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRvZ2dsZVNjcmlwdCIpLnN0eWxlLmJhY2tncm91bmQgPSAiIzMyY2QzMiI7CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJ0b2dnbGVTY3JpcHQiKS5zdHlsZS5jb2xvciA9ICJibGFjayI7CnVwZGF0ZVN0YXR1cygi5YGc5q2i5LitIik7CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJpbnRlcnZhbCIpLnZhbHVlID0gMzAwMDsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImludGVydmFsVmFsdWUiKS50ZXh0Q29udGVudCA9IDMwMDA7Cn0pOwoKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImN1c3RvbVRleHQiKS5hZGRFdmVudExpc3RlbmVyKCJpbnB1dCIsIGZ1bmN0aW9uICgpIHsKY3VzdG9tVGV4dFZhbHVlID0gdGhpcy52YWx1ZSB8fCAi44OG44K544OIIjsKfSk7CgpsZXQgaXNNaW5pbWl6ZWQgPSBmYWxzZTsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIm1pbmltaXplQnV0dG9uIikuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKSA9PiB7CmNvbnN0IHBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImNvbnRyb2xQYW5lbCIpOwoKaWYgKGlzTWluaW1pemVkKSB7CnBhbmVsLnN0eWxlLndpZHRoID0gIjMwMHB4IjsKcGFuZWwuc3R5bGUuaGVpZ2h0ID0gImF1dG8iOwpwYW5lbC5zdHlsZS5wYWRkaW5nID0gIjE1cHgiOwpwYW5lbC5zdHlsZS5vdmVyZmxvdyA9ICJ2aXNpYmxlIjsKcGFuZWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBpbnB1dCwgcCwgbGFiZWwsIGgzLCBkaXYnKS5mb3JFYWNoKGVsZW1lbnQgPT4gewppZiAoZWxlbWVudC5pZCAhPT0gIm1pbmltaXplQnV0dG9uIikgewplbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOwp9Cn0pOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibG9nb1RleHQiKS5zdHlsZS5mb250U2l6ZSA9ICIzNnB4IjsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIm1pbmltaXplQnV0dG9uIikudGV4dENvbnRlbnQgPSAi4oCTIjsKaXNNaW5pbWl6ZWQgPSBmYWxzZTsKfSBlbHNlIHsKcGFuZWwuc3R5bGUud2lkdGggPSAiNTBweCI7CnBhbmVsLnN0eWxlLmhlaWdodCA9ICI1MHB4IjsKcGFuZWwuc3R5bGUucGFkZGluZyA9ICI1cHgiOwpwYW5lbC5zdHlsZS5vdmVyZmxvdyA9ICJoaWRkZW4iOwpwYW5lbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBwLCBsYWJlbCwgaDMsIGRpdicpLmZvckVhY2goZWxlbWVudCA9PiB7CmlmIChlbGVtZW50LmlkICE9PSAibWluaW1pemVCdXR0b24iKSB7CmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsKfQp9KTsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImxvZ29UZXh0Iikuc3R5bGUuZm9udFNpemUgPSAiMjBweCI7CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJtaW5pbWl6ZUJ1dHRvbiIpLnRleHRDb250ZW50ID0gIisiOwppc01pbmltaXplZCA9IHRydWU7Cn0KfSk7Cn0pOwp9KSgpOw==";

    // app(23)
    const decodedScript = atob(base64Script);
    eval(decodedScript); // 注意: eval の使用はセキュリティリスクがあるため必要な場合のみ
  });
})();

