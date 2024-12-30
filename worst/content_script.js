// content_script.js
(() => {
    // js
javascript:(function(){let script = document.createElement("script");
script.src = "data:text/javascript;base64,KCgpID0+IHsKICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgY29udGFpbmVyLmlubmVySFRNTCA9IGAKICAgICAgICA8ZGl2IGlkPSJjb250cm9sUGFuZWwiIHN0eWxlPSIKICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOwogICAgICAgICAgICB0b3A6IDIwcHg7CiAgICAgICAgICAgIHJpZ2h0OiAyMHB4OwogICAgICAgICAgICB6LWluZGV4OiAxMDAwMDsKICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7CiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7CiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMmNkMzI7CiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7CiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7CiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsKICAgICAgICAgICAgY29sb3I6ICMzMmNkMzI7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsKICAgICAgICAgICAgd2lkdGg6IDMwMHB4OwogICAgICAgICI+CiAgICAgICAgICAgIDxkaXYgaWQ9ImxvZ29UZXh0IiBzdHlsZT0iCiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7CiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7CiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICAgICAgICAgIGNvbG9yOiAjRkYwMDAwOwogICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMjU1LCAwLCAwLCAwLjgpLCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMC42KTsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYmxpbmsgMnMgaW5maW5pdGU7CiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICAgICAgICAiPgogICAgICAgICAgICAgICAgV09SU1QKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxoMyBzdHlsZT0ibWFyZ2luOiAwIDAgMTBweDsgY29sb3I6ICMzMmNkMzI7Ij7jgrnjgq/jg6rjg5fjg4jliLblvqHjg5Hjg43jg6s8L2gzPgogICAgICAgICAgICA8cCBpZD0ic3RhdHVzIiBzdHlsZT0ibWFyZ2luOiA1cHggMDsiPuOCueODhuODvOOCv+OCuTog5YGc5q2i5LitPC9wPgogICAgICAgICAgICA8YnV0dG9uIGlkPSJ0b2dnbGVTY3JpcHQiIHN0eWxlPSIKICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMmNkMzI7CiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7CiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCAyMDUsIDUwLCAwLjQpOwogICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsKICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICAiPuOCueOCr+ODquODl+ODiOOCkumWi+WnizwvYnV0dG9uPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiAxNXB4OyI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJpbnRlcnZhbCIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7Ij7lrp/ooYzplpPpmpQgKG1zKTo8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InJhbmdlIiBpZD0iaW50ZXJ2YWwiIG1pbj0iMTAwMCIgbWF4PSIxMDAwMCIgdmFsdWU9IjMwMDAiIHN0ZXA9IjUwMCIgc3R5bGU9IndpZHRoOiAxMDAlOyI+CiAgICAgICAgICAgICAgICA8c3BhbiBpZD0iaW50ZXJ2YWxWYWx1ZSI+MzAwMDwvc3Bhbj4gbXMKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxidXR0b24gaWQ9InJlc2V0VUkiIHN0eWxlPSIKICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjazsKICAgICAgICAgICAgICAgIGNvbG9yOiAjMzJjZDMyOwogICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzMyY2QzMjsKICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICAiPuODquOCu+ODg+ODiDwvYnV0dG9uPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiAxNXB4OyI+CiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9ImNvbG9yOiAjMzJjZDMyOyI+44Kr44K544K/44Og44OG44Kt44K544OIPC9oND4KICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iY3VzdG9tVGV4dCIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7Ij7pgIHkv6Hjg4bjgq3jgrnjg4jjgpLnt6jpm4Y8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0iY3VzdG9tVGV4dCIgc3R5bGU9IndpZHRoOiAxMDAlOyBwYWRkaW5nOiA1cHg7IiBwbGFjZWhvbGRlcj0i44OG44Kt44K544OI44KS5YWl5Yqb4oCmIj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGJ1dHRvbiBpZD0ibWluaW1pemVCdXR0b24iIHN0eWxlPSIKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIHRvcDogMTBweDsKICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4OwogICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmMDAwMDsKICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OwogICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4OwogICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OwogICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgICAgICAgICAgcGFkZGluZzogMDsKICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAxOwogICAgICAgICAgICAiPuKAkzwvYnV0dG9uPgogICAgICAgICAgICA8cCBzdHlsZT0iCiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4OwogICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7CiAgICAgICAgICAgICI+6KO95L2c6ICFOiBhYWEvdHJpcDpmZWVkZXI8L3A+CiAgICAgICAgPC9kaXY+CiAgICBgOwoKICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTsKICAgIHN0eWxlLnRleHRDb250ZW50ID0gYAogICAgICAgIEBrZXlmcmFtZXMgYmxpbmsgewogICAgICAgICAgICAwJSwgMTAwJSB7CiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMjU1LCAwLCAwLCAwLjgpLCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMC42KTsKICAgICAgICAgICAgfQogICAgICAgICAgICA1MCUgewogICAgICAgICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMjU1LCAwLCAwLCAwLjQpLCAwIDAgNXB4IHJnYmEoMjU1LCAwLCAwLCAwLjMpOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgYDsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpOwogICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpOwoKICAgIGxldCBpbnRlcnZhbElkID0gbnVsbDsKICAgIGxldCBpbnRlcnZhbFRpbWUgPSAzMDAwOwogICAgbGV0IGN1c3RvbVRleHRWYWx1ZSA9ICI6zLfMn8yszJ/Ms8yWzY7Nh8yvzZbMmcyYzKzMi8y9zIDMlMyHzJTNgsyLzYvMg82LzZvNkM2CzI/NkcyNzZHMkMyJzIHMiMyBzIjMgVdPUlNUOsy3zJ/MrMyfzLPMls2OzYfMr82WzJnMmMyLzL3MgMyUzIfMlM2CzIvNi8yDzYvNm82QzYLMj82RzI3NkcyQzInMgcyIzIHMiMyBIjsKCiAgICBjb25zdCB1cGRhdGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7CiAgICAgICAgY29uc3Qgc3RhdHVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzdGF0dXMiKTsKICAgICAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gYOOCueODhuODvOOCv+OCuTogJHtzdGF0dXN9YDsKICAgIH07CgogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRvZ2dsZVNjcmlwdCIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgZnVuY3Rpb24gKCkgewogICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXM7CgogICAgICAgIGlmIChpbnRlcnZhbElkKSB7CiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7CiAgICAgICAgICAgIGludGVydmFsSWQgPSBudWxsOwogICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAi44K544Kv44Oq44OX44OI44KS6ZaL5aeLIjsKICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAiIzMyY2QzMiI7CiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9ICJibGFjayI7CiAgICAgICAgICAgIHVwZGF0ZVN0YXR1cygi5YGc5q2i5LitIik7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHsKICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiNwb3N0X2Zvcm1fc2luZ2xlIik7CiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiI3Bvc3RfYnRuIik7CgogICAgICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudCAmJiBidXR0b25FbGVtZW50KSB7CiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gY3VzdG9tVGV4dFZhbHVlICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpOwogICAgICAgICAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuY2xpY2soKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSwgaW50ZXJ2YWxUaW1lKTsKICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gIuOCueOCr+ODquODl+ODiOOCkuWBnOatoiI7CiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gImJsYWNrIjsKICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmNvbG9yID0gIiMzMmNkMzIiOwogICAgICAgICAgICB1cGRhdGVTdGF0dXMoIumWi+Wni+S4rSIpOwogICAgICAgIH0KICAgIH0pOwoKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJpbnRlcnZhbCIpLmFkZEV2ZW50TGlzdGVuZXIoImlucHV0IiwgZnVuY3Rpb24gKCkgewogICAgICAgIGludGVydmFsVGltZSA9IHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKTsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiaW50ZXJ2YWxWYWx1ZSIpLnRleHRDb250ZW50ID0gaW50ZXJ2YWxUaW1lOwogICAgfSk7CgogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInJlc2V0VUkiKS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsICgpID0+IHsKICAgICAgICBpZiAoaW50ZXJ2YWxJZCkgewogICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpOwogICAgICAgICAgICBpbnRlcnZhbElkID0gbnVsbDsKICAgICAgICB9CiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRvZ2dsZVNjcmlwdCIpLnRleHRDb250ZW50ID0gIuOCueOCr+ODquODl+ODiOOCkumWi+WniyI7CiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRvZ2dsZVNjcmlwdCIpLnN0eWxlLmJhY2tncm91bmQgPSAiIzMyY2QzMiI7CiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRvZ2dsZVNjcmlwdCIpLnN0eWxlLmNvbG9yID0gImJsYWNrIjsKICAgICAgICB1cGRhdGVTdGF0dXMoIuWBnOatouS4rSIpOwogICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJpbnRlcnZhbCIpLnZhbHVlID0gMzAwMDsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiaW50ZXJ2YWxWYWx1ZSIpLnRleHRDb250ZW50ID0gMzAwMDsKICAgIH0pOwoKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjdXN0b21UZXh0IikuYWRkRXZlbnRMaXN0ZW5lcigiaW5wdXQiLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgY3VzdG9tVGV4dFZhbHVlID0gdGhpcy52YWx1ZSB8fCAi44OG44K544OIIjsKICAgIH0pOwoKICAgIC8vIOacgOWwj+WMluODnOOCv+ODs+OBruWLleS9nAogICAgbGV0IGlzTWluaW1pemVkID0gZmFsc2U7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibWluaW1pemVCdXR0b24iKS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsICgpID0+IHsKICAgICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250cm9sUGFuZWwiKTsKCiAgICAgICAgaWYgKGlzTWluaW1pemVkKSB7CiAgICAgICAgICAgIC8vIOWFg+OBrueKtuaFi+OBq+aIu+OBmQogICAgICAgICAgICBwYW5lbC5zdHlsZS53aWR0aCA9ICIzMDBweCI7CiAgICAgICAgICAgIHBhbmVsLnN0eWxlLmhlaWdodCA9ICJhdXRvIjsKICAgICAgICAgICAgcGFuZWwuc3R5bGUucGFkZGluZyA9ICIxNXB4IjsKICAgICAgICAgICAgcGFuZWwuc3R5bGUub3ZlcmZsb3cgPSAidmlzaWJsZSI7CiAgICAgICAgICAgIHBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHAsIGxhYmVsLCBoMywgZGl2JykuZm9yRWFjaChlbGVtZW50ID0+IHsKICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkICE9PSAibWluaW1pemVCdXR0b24iKSB7CiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy8g5YWo44Gm6KGo56S6CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pOwogICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibG9nb1RleHQiKS5zdHlsZS5mb250U2l6ZSA9ICIzNnB4IjsKICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIm1pbmltaXplQnV0dG9uIikudGV4dENvbnRlbnQgPSAi4oCTIjsgLy8g44Oc44K/44Oz44Gv44CM4oCT44CNCiAgICAgICAgICAgIGlzTWluaW1pemVkID0gZmFsc2U7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8g5pyA5bCP5YyW54q25oWL44Gr44GZ44KLCiAgICAgICAgICAgIHBhbmVsLnN0eWxlLndpZHRoID0gIjUwcHgiOyAvLyDluYXjgpLlsI/jgZXjgY8KICAgICAgICAgICAgcGFuZWwuc3R5bGUuaGVpZ2h0ID0gIjUwcHgiOyAvLyDpq5jjgZXjgpLlsI/jgZXjgY8KICAgICAgICAgICAgcGFuZWwuc3R5bGUucGFkZGluZyA9ICI1cHgiOyAvLyDjgrnjg6rjg6DljJYKICAgICAgICAgICAgcGFuZWwuc3R5bGUub3ZlcmZsb3cgPSAiaGlkZGVuIjsgLy8g44Kz44Oz44OG44Oz44OE44Gu44Gv44G/5Ye644GX44KS6Z2e6KGo56S6CiAgICAgICAgICAgIHBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHAsIGxhYmVsLCBoMywgZGl2JykuZm9yRWFjaChlbGVtZW50ID0+IHsKICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkICE9PSAibWluaW1pemVCdXR0b24iKSB7CiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyDku5bopoHntKDjgpLpnZ7ooajnpLoKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImxvZ29UZXh0Iik7CiAgICAgICAgICAgIGxvZ29UZXh0LnN0eWxlLmRpc3BsYXkgPSAiYmxvY2siOyAvLyDjg63jgrTjgaDjgZHooajnpLoKICAgICAgICAgICAgbG9nb1RleHQuc3R5bGUuZm9udFNpemUgPSAiMjRweCI7IC8vIOOCteOCpOOCuuOCkuiqv+aVtAogICAgICAgICAgICBsb2dvVGV4dC5zdHlsZS50ZXh0QWxpZ24gPSAiY2VudGVyIjsgLy8g5Lit5aSu5a+E44GbCiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJtaW5pbWl6ZUJ1dHRvbiIpLnRleHRDb250ZW50ID0gIisiOyAvLyDjg5zjgr/jg7Pjga/jgIwr44CNCiAgICAgICAgICAgIGlzTWluaW1pemVkID0gdHJ1ZTsKICAgICAgICB9CiAgICB9KTsKfSkoKTsK";
document.body.appendChild(script);})();
result = "";
})();
