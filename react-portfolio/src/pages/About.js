import React from "react";
import "./About.css";
import profile from "../images/profile.jpeg";
import reduxLogo from "../images/redux.svg";

const About = () => {
  return (
    <div id="about__container">
      <div className="about__title">ABOUT ME</div>
      <div className="about__body">
        <div className="about__photo">
          <img className="about__photo-profile" src={profile}></img>
          <img
            className="about__photo-react"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMxNS45NzYgMzE1Ljk3NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iIiBkPSJNMTU3Ljk4NSwxMzAuMjU1Yy0xNS4yNCwwLTI3LjY0MSwxMi40MDYtMjcuNjQxLDI3LjY0N2MwLDE1LjI0NiwxMi40MDEsMjcuNjQ3LDI3LjY0MSwyNy42NDcgICAgICBjMTUuMjQ2LDAsMjcuNjQ3LTEyLjQwMSwyNy42NDctMjcuNjQ3QzE4NS42MzIsMTQyLjY2MiwxNzMuMjMxLDEzMC4yNTUsMTU3Ljk4NSwxMzAuMjU1eiIgZmlsbD0iIzU3YzVmYiIgZGF0YS1vcmlnaW5hbD0iIzAxMDAwMiI+PC9wYXRoPgoJCQk8L2c+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iIiBkPSJNMzE1Ljk2OCwxNjEuMzIzYzAuMjEyLTkuNTczLTMuOTA1LTE4Ljc4MS0xMi4yMzItMjcuMzY5YzAtMC4wMDUsMC0wLjAyMiwwLTAuMDIyICAgICBjMC04LjE2NC02LjY0MS0xNC44MDUtMTQuODExLTE0LjgwNWMtMS4zODIsMC0yLjc1MiwwLjE5LTQuMDc5LDAuNTgyYy01LjEwNy0yLjk0OC0xMC42OTktNS42ODktMTYuNjQ5LTguMTc1ICAgICBjLTMuOTY1LTEuNjUzLTguNDYzLTMuMzA3LTEzLjY1OC01LjAyNmMxMS4xMTItNDAuMjQ0LDcuMDQ5LTY5Ljg5Ny0xMS4zMTMtODEuNjYyYy0xOS4yNDMtMTIuMzU4LTUxLjA4NC0xLjQ2My04NS4yNDEsMjkuNTQgICAgIEMxMjMuODM5LDIzLjQsOTIuMDMxLDEyLjQ2Miw3Mi43NDQsMjQuODQ2Yy0xMS42ODMsNy40ODQtMTcuNjk5LDIyLjI5NS0xNy40Nyw0Mi45MmMtMy42NTUsMi43NjgtNS44NTIsNy4wODItNS44NTIsMTEuNzM3ICAgICBjMCw1Ljg4LDMuNDcsMTEuMDksOC42OTcsMTMuNDU2YzAuNjM2LDMuMTExLDEuNDMsNi40NzgsMi40MSwxMC4xOTNjLTM4LjA3MywxMS41MzEtNjAuMDU4LDMwLjEyMi02MC41Miw1MS4zMjggICAgIGMtMC40MTksMTkuMDU5LDE2LjU0NiwzNi43NDYsNDcuNzYsNDkuNzg0YzMuOTg3LDEuNjc1LDguNTEyLDMuMzM0LDEzLjc0NSw1LjA1OGMtMS40NzQsNS4yNi0yLjYxMSw5LjkzNy0zLjQ2NSwxNC4yMzQgICAgIGMtNi41ODEsMzMuMTg0LTEuMzYsNTcuMTIxLDE0LjcwMiw2Ny40MTdjMTkuMzQ3LDEyLjM1OCw1MS4xMTYsMS40MjUsODUuMjQxLTI5LjU1NmMyNC42NzcsMjIuMzk4LDQ4LjIzNCwzNC42OTYsNjYuNTk2LDM0LjcwNyAgICAgYzcuMDI3LDAsMTMuMjk5LTEuNzMsMTguNjUxLTUuMTU2YzE2LjA1Ni0xMC4yOTEsMjEuMjcyLTM0LjIyOCwxNC42OTEtNjcuNDEyYy0wLjY0Ny0zLjI1OC0xLjQ4NS02Ljg0OC0yLjU0LTEwLjg2NyAgICAgQzI5My40OTQsMjAxLjE0OCwzMTUuNTA2LDE4Mi41NDcsMzE1Ljk2OCwxNjEuMzIzeiBNODAuNzgzLDI3OC4zOTljLTEwLjIyNS02LjU0OS0xMy4yNi0yNS45NzItOC4xMS01MS45NDkgICAgIGMwLjc1Ni0zLjgwMiwxLjc3OS04LjAxNywzLjExNy0xMi44MDRjMTQuMTg1LDMuNzg2LDI5LjY5Nyw2LjYzNiw0Ni4yMTYsOC40NzRjOC4xOCwxMC41MTksMTYuNjM4LDIwLjIyMiwyNS4xODgsMjguOTE0ICAgICBDMTE5LjY1NiwyNzUuODI3LDkzLjczOSwyODYuNjg4LDgwLjc4MywyNzguMzk5eiBNODAuNzgzLDM3LjRjMTIuOTE4LTguMjM1LDM4Ljg3MywyLjU3OCw2Ni40MTEsMjcuMzc1ICAgICBjLTguMTg2LDguMzE2LTE2LjI3OSwxNy41NDEtMjQuMDksMjcuNDg0Yy0xNy4xNTUsMS4yMzUtMzMuMjcxLDMuNTg0LTQ4LjAwNSw3LjAxMWMtMC42OC0yLjY2NS0xLjMwNS01LjMyNS0xLjg3Ni04LjA1ICAgICBjMy42MDYtMi43NjMsNS44MDMtNy4wODcsNS44MDMtMTEuNzE2YzAtNS44OTYtMy41MjUtMTEuMTUtOC43MjQtMTMuNTA1QzcwLjMwNyw1NS40MzYsNzIuMzA0LDQyLjgzMyw4MC43ODMsMzcuNHogICAgICBNODAuMTQ3LDE5OS4zODZjMi44MzQtOC4yMDIsNi4yMTEtMTYuNiwxMC4wODQtMjUuMDY5YzMuNzI2LDYuNjI1LDcuNjQ3LDEzLjE1NywxMS43MSwxOS40OTQgICAgIGMyLjQ1OCwzLjg0NSw1LjAzMSw3LjY5Niw3Ljc3MiwxMS42MjlDOTkuMjIyLDIwMy44Myw4OS4zMjIsMjAxLjgwNiw4MC4xNDcsMTk5LjM4NnogTTEwMS45NDcsMTIxLjk5MyAgICAgYy00LjA4NSw2LjM4LTcuOTk1LDEyLjg4LTExLjY2MSwxOS4zOTZjLTQuMTk5LTkuMjg0LTcuODMyLTE4LjUzMS0xMC44NjItMjcuNjM2YzkuOTIxLTIuMjg0LDIwLjUxMS00LjA3NCwzMS42MzktNS4zNDEgICAgIEMxMDcuOTA4LDExMi44OTksMTA0Ljg2MiwxMTcuNDQ2LDEwMS45NDcsMTIxLjk5M3ogTTk4LjM4NCwxNTcuODUzYzUuMDMxLTkuNjE2LDEwLjQ0OC0xOC45NTUsMTYuMTIxLTI3LjgxNSAgICAgYzQuOTA2LTcuNjU4LDEwLjM4OS0xNS40ODUsMTYuMzA2LTIzLjMwNmM5LjM0NC0wLjUyMiwxOC43NTQtMC42OCwyOC4yOTQtMC40NjJjOC45OTYsMC4xOTYsMTguMDM2LDAuNzA3LDI2Ljg2OSwxLjUzOSAgICAgYzUuNjA4LDcuNDY4LDEwLjgxOCwxNC45MywxNS40OTYsMjIuMjI0YzUuNjY4LDguODU1LDExLjA5LDE4LjIxLDE2LjExNiwyNy44MjFjLTUuMDg2LDkuNzU4LTEwLjUwMywxOS4xNC0xNi4xMTYsMjcuOTA4ICAgICBjLTQuOTMzLDcuNjk2LTEwLjQwNSwxNS41MjMtMTYuMzAxLDIzLjMwMWMtOS4zMzksMC41MTEtMTguNzM4LDAuNjY0LTI4LjMwNSwwLjQ1N2MtOC45NzQtMC4xODUtMTguMDAzLTAuNzAyLTI2Ljg2OS0xLjUzNCAgICAgYy01LjYxOS03LjQ3My0xMC44MTgtMTQuOTQ3LTE1LjQ5LTIyLjIyNEMxMDguODk4LDE3Ny4wMSwxMDMuNDgsMTY3LjYyNyw5OC4zODQsMTU3Ljg1M3ogTTIwNC45MDMsMjA3LjM5MiAgICAgYzMuMTYtNC41MDksNi4yMjItOS4wNTEsOS4xMjEtMTMuNTgxYzQuMDY4LTYuMzUzLDcuOTk1LTEyLjg4NSwxMS43MS0xOS41MDRjNC4yNTMsOS4zNDQsNy45MywxOC42MTgsMTAuOTQ5LDI3LjcwNyAgICAgQzIyNi43MjQsMjA0LjMxOSwyMTYuMDgsMjA2LjExOSwyMDQuOTAzLDIwNy4zOTJ6IE0yMTQuMDI0LDEyMS45OTNjLTIuNDg2LTMuODgzLTUuMDU4LTcuNzM0LTcuNzc4LTExLjYzNCAgICAgYzEwLjQyMSwxLjU5OSwyMC4yODgsMy42MTcsMjkuNDYzLDYuMDMyYy0yLjgzNCw4LjE4Ni02LjE5LDE2LjU2Mi0xMC4wMjQsMjUuMDAzICAgICBDMjIyLjAzLDEzNC44OTUsMjE4LjEyNSwxMjguNDAxLDIxNC4wMjQsMTIxLjk5M3ogTTI0MC4wNjYsMTAyLjEyNWMtMTQuMTkxLTMuNzgtMjkuNjc2LTYuNjA4LTQ2LjEwMi04LjQ0MSAgICAgYy04LjE4LTEwLjUxOS0xNi42MzMtMjAuMjIyLTI1LjE4OC0yOC45MDNjMjcuNTM4LTI0Ljc5Nyw1My41MTUtMzUuNjEsNjYuNDE2LTI3LjM3NSAgICAgQzI0Ny4zNTQsNDUuMTk5LDI0OS4xMjIsNjkuMjU2LDI0MC4wNjYsMTAyLjEyNXogTTE1OS40MzIsOTEuMzU1Yy0yLjg3Ny0wLjA2LTUuNzQ0LTAuMDkyLTguNTgzLTAuMDkyICAgICBjLTIuNTc4LDAtNS4xNCwwLjAyMi03LjY4LDAuMDc2YzQuODY4LTUuNyw5LjgyMy0xMS4xMTIsMTQuODI3LTE2LjE3NmM1LjIwNSw1LjI4MSwxMC4zNDUsMTAuODk0LDE1LjM0OSwxNi43ODUgICAgIEMxNjguNDM5LDkxLjY0OSwxNjMuODMyLDkxLjQ1OSwxNTkuNDMyLDkxLjM1NXogTTY0LjczMiwxMTcuNjQyYzQuMjE1LDEyLjc2LDkuODgzLDI2LjI4NywxNi44NjEsNDAuMjkzICAgICBjLTYuMzY0LDEyLjgwNC0xMS42NDUsMjUuMjctMTUuNzEzLDM3LjEyN2MtNC43MS0xLjU1Ni04Ljc3My0zLjA2Mi0xMi4zNjgtNC41NThjLTI0LjQzOC0xMC4yMDktMzguODY4LTIzLjU1MS0zOC41OTYtMzUuNzAyICAgICBDMTUuMjE1LDE0MC43OTYsMzMuNzU3LDEyNy4wMyw2NC43MzIsMTE3LjY0MnogTTE1Ni41NDksMjI0LjQ0NGM1LjQ3NywwLjExNCwxMC45MTYsMC4xMjUsMTYuMjYzLDAuMDE2ICAgICBjLTQuODY4LDUuNy05LjgyOCwxMS4xMTctMTQuODI3LDE2LjE5MmMtNS4xODktNS4yNi0xMC4zMjktMTAuODczLTE1LjM1NC0xNi43OTYgICAgIEMxNDcuNjAyLDIyNC4xNTUsMTUyLjE0OSwyMjQuMzQ2LDE1Ni41NDksMjI0LjQ0NHogTTE5Mi44NjYsMjIzLjU1MmMxNy4xNi0xLjIyOSwzMy4zMTQtMy41OSw0OC4xMDktNy4wMzggICAgIGMwLjk2MywzLjY4MiwxLjczLDYuOTUxLDIuMzI4LDkuOTQzYzUuMTUxLDI1Ljk2NiwyLjEyNyw0NS4zODktOC4wOTksNTEuOTQzYy0xMi45NDUsOC4yODktMzguODg0LTIuNTg5LTY2LjQyMi0yNy4zNTggICAgIEMxNzYuOTU3LDI0Mi43MzUsMTg1LjAzOSwyMzMuNTE2LDE5Mi44NjYsMjIzLjU1MnogTTI1MS4xMTgsMTk4LjE4OWMtNC4yNy0xMi45NjEtOS44ODgtMjYuNDcyLTE2Ljc0Ny00MC4yNjUgICAgIGM2LjM0Mi0xMi43MjIsMTEuNjQtMjUuMTk5LDE1Ljc1Mi0zNy4xNjVjNC43MzcsMS41NzIsOC43MjQsMy4wNCwxMi4zMyw0LjU0MmM0LjIzNywxLjc3OSw4LjI1MSwzLjY4OCwxMS45ODIsNS42OTUgICAgIGMtMC4yMDcsMC45NjgtMC4zMSwxLjk0Ny0wLjMxLDIuOTMyYzAsOC4xNTksNi42NDcsMTQuOCwxNC44LDE0LjhjMi4yOTUsMCw0LjUzNi0wLjUzOCw2LjU2LTEuNTU2ICAgICBjMy44MDIsNC43MDUsNS42NzMsOS4zNDQsNS41NywxMy44MzJDMzAwLjc2NiwxNzUuMDE5LDI4Mi4xODEsMTg4Ljc5MSwyNTEuMTE4LDE5OC4xODl6IiBmaWxsPSIjNTdjNWZiIiBkYXRhLW9yaWdpbmFsPSIjMDEwMDAyIj48L3BhdGg+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
          />
          <img className="about__photo-redux" src={reduxLogo} />
          <img
            className="about__photo-js"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwNjQgMTA2NC4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE3LjczNDM3NSA5NzUuMzMyMDMxYzAgMzkuMTc1NzgxIDMxLjc1NzgxMyA3MC45MzM1OTQgNzAuOTMzNTk0IDcwLjkzMzU5NGg3NDQuODAwNzgxYzM5LjE3MTg3NSAwIDcwLjkzMzU5NC0zMS43NTc4MTMgNzAuOTMzNTk0LTcwLjkzMzU5NHYtMzUuNDY0ODQzaC04ODYuNjY3OTY5em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNiY2JlYzAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im03NjIuNTM1MTU2IDE3LjczNDM3NWgtNjczLjg2NzE4N2MtMzkuMTc1NzgxIDAtNzAuOTMzNTk0IDMxLjc1NzgxMy03MC45MzM1OTQgNzAuOTI5Njg3djQ2MS4wNzAzMTNoODg2LjY2Nzk2OXYtMzkwLjEzMjgxM2gtMTQxLjg2NzE4OHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjYmNiZWMwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNzYyLjUzNTE1NiAxNTkuNjAxNTYyaDE0MS44NjcxODhsLTE0MS44NjcxODgtMTQxLjg2NzE4N3ptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjOTM5NTk4IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTcuNzM0Mzc1IDkzOS44NjcxODhoODg2LjY2Nzk2OXYtMzkwLjEzMjgxM2gtODg2LjY2Nzk2OXptNTg1LjE5OTIxOS0xOTUuMDY2NDA3aC03MC45MzM1OTRjLTE5LjU4NTkzOCAwLTM1LjQ2NDg0NC0xNS44Nzg5MDYtMzUuNDY0ODQ0LTM1LjQ2ODc1di03MC45MzM1OTNjMC0xOS41ODU5MzggMTUuODc4OTA2LTM1LjQ2NDg0NCAzNS40NjQ4NDQtMzUuNDY0ODQ0LTE5LjU4NTkzOCAwLTM1LjQ2NDg0NCAxNS44Nzg5MDYtMzUuNDY0ODQ0IDM1LjQ2NDg0NHY3MC45MzM1OTNjMCAxOS41ODk4NDQgMTUuODc4OTA2IDM1LjQ2ODc1IDM1LjQ2NDg0NCAzNS40Njg3NWg3MC45MzM1OTRjMTkuNTg5ODQ0IDAgMzUuNDY4NzUgMTUuODc4OTA3IDM1LjQ2ODc1IDM1LjQ2NDg0NHY3MC45MzM1OTRjMCAxOS41ODk4NDMtMTUuODc4OTA2IDM1LjQ2ODc1LTM1LjQ2ODc1IDM1LjQ2ODc1IDE5LjU4OTg0NCAwIDM1LjQ2ODc1LTE1Ljg3ODkwNyAzNS40Njg3NS0zNS40Njg3NXYtNzAuOTMzNTk0YzAtMTkuNTg1OTM3LTE1Ljg3ODkwNi0zNS40NjQ4NDQtMzUuNDY4NzUtMzUuNDY0ODQ0em0tMjQ4LjI2NTYyNSAxNDEuODY3MTg4YzM5LjE3NTc4MSAwIDcwLjkzMzU5My0zMS43NTc4MTMgNzAuOTMzNTkzLTcwLjkzMzU5NCAwIDM5LjE3NTc4MS0zMS43NTc4MTIgNzAuOTMzNTk0LTcwLjkzMzU5MyA3MC45MzM1OTRzLTcwLjkzMzU5NC0zMS43NTc4MTMtNzAuOTMzNTk0LTcwLjkzMzU5NGMwIDM5LjE3NTc4MSAzMS43NTc4MTMgNzAuOTMzNTk0IDcwLjkzMzU5NCA3MC45MzM1OTR6bTAgMCIgZmlsbD0iI2ZmZTQ3NyIgZGF0YS1vcmlnaW5hbD0iI2ZmZTQ3NyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTkyMS45NzI2NTYgMTU5LjYwMTU2MmMuMDYyNS00LjY4MzU5My0xLjc1MzkwNi05LjE5OTIxOC01LjAzNTE1Ni0xMi41MzkwNjJsLTE0MS44NjcxODgtMTQxLjg2NzE4OGMtMy4zNDM3NS0zLjI3NzM0My03Ljg1NTQ2OC01LjA4MjAzMS0xMi41MzUxNTYtNS4wMTk1MzF2LS4xNzU3ODFoLTY3My44NjcxODdjLTQ4Ljk0NTMxMy4wNTg1OTM4LTg4LjYwOTM3NTIgMzkuNzIyNjU2LTg4LjY2Nzk2OSA4OC42Njc5Njl2ODg2LjY2Nzk2OWMuMDU4NTkzOCA0OC45NDE0MDYgMzkuNzIyNjU2IDg4LjYwNTQ2OCA4OC42Njc5NjkgODguNjY0MDYyaDc0NC44MDA3ODFjNDguOTQ1MzEyLS4wNTg1OTQgODguNjA1NDY5LTM5LjcyMjY1NiA4OC42NjQwNjItODguNjY0MDYyem0tMTQxLjcwNzAzMS05OS4wNTg1OTMgODEuMzI4MTI1IDgxLjMyNDIxOWgtODEuMzI4MTI1em0tNjkxLjU5NzY1Ni0yNS4wNzQyMTloNjU2LjEzMjgxMnYxMjQuMTMyODEyYzAgOS43OTI5NjkgNy45NDE0MDcgMTcuNzMwNDY5IDE3LjczNDM3NSAxNy43MzA0NjloMTI0LjEzMjgxM3YzNTQuNjY3OTY5aC04NTEuMTk5MjE5di00NDMuMzMyMDMxYzAtMjkuMzgyODEzIDIzLjgxNjQwNi01My4xOTkyMTkgNTMuMTk5MjE5LTUzLjE5OTIxOXptNzk4IDg4Ni42NjQwNjJoLTg1MS4xOTkyMTl2LTM1NC42NjQwNjJoODUxLjE5OTIxOXptLTUzLjE5OTIxOSAxMDYuMzk4NDM4aC03NDQuODAwNzgxYy0yOS4zODI4MTMgMC01My4xOTkyMTktMjMuODE2NDA2LTUzLjE5OTIxOS01My4xOTkyMTl2LTE3LjczMDQ2OWg4NTEuMTk5MjE5djE3LjczMDQ2OWMwIDI5LjM4MjgxMy0yMy44MjAzMTMgNTMuMTk5MjE5LTUzLjE5OTIxOSA1My4xOTkyMTl6bTAgMCIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM1NC42Njc5NjkgOTA0LjM5ODQzOGM0OC45NDUzMTItLjA1ODU5NCA4OC42MDkzNzUtMzkuNzE4NzUgODguNjY3OTY5LTg4LjY2NDA2M3YtMjEyLjgwMDc4MWMwLTkuNzkyOTY5LTcuOTQxNDA3LTE3LjczNDM3NS0xNy43MzQzNzYtMTcuNzM0Mzc1LTkuNzkyOTY4IDAtMTcuNzM0Mzc0IDcuOTQxNDA2LTE3LjczNDM3NCAxNy43MzQzNzV2MjEyLjgwMDc4MWMwIDI5LjM3ODkwNi0yMy44MTY0MDcgNTMuMTk5MjE5LTUzLjE5OTIxOSA1My4xOTkyMTktMjkuMzgyODEzIDAtNTMuMTk5MjE5LTIzLjgyMDMxMy01My4xOTkyMTktNTMuMTk5MjE5IDAtOS43OTY4NzUtNy45Mzc1LTE3LjczNDM3NS0xNy43MzQzNzUtMTcuNzM0Mzc1LTkuNzkyOTY5IDAtMTcuNzMwNDY5IDcuOTQxNDA2LTE3LjczMDQ2OSAxNy43MzQzNzUuMDU0Njg4IDQ4Ljk0NTMxMyAzOS43MTg3NSA4OC42MDU0NjkgODguNjY0MDYzIDg4LjY2NDA2M3ptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNjAyLjkzMzU5NCA4NjguOTMzNTk0aC0xMDYuMzk4NDM4Yy05Ljc5Mjk2OCAwLTE3LjczNDM3NSA3LjkzNzUtMTcuNzM0Mzc1IDE3LjczMDQ2OCAwIDkuNzk2ODc2IDcuOTQxNDA3IDE3LjczNDM3NiAxNy43MzQzNzUgMTcuNzM0Mzc2aDEwNi4zOTg0MzhjMjkuMzgyODEyIDAgNTMuMTk5MjE4LTIzLjgxNjQwNyA1My4xOTkyMTgtNTMuMTk5MjE5di03MC45MzM1OTRjMC0yOS4zODI4MTMtMjMuODE2NDA2LTUzLjE5OTIxOS01My4xOTkyMTgtNTMuMTk5MjE5aC03MC45MzM1OTRjLTkuNzkyOTY5IDAtMTcuNzMwNDY5LTcuOTM3NS0xNy43MzA0NjktMTcuNzM0Mzc1di03MC45MzM1OTNjMC05Ljc5Mjk2OSA3LjkzNzUtMTcuNzMwNDY5IDE3LjczMDQ2OS0xNy43MzA0NjloMTA2LjQwMjM0NGM5Ljc5Mjk2OCAwIDE3LjczMDQ2OC03Ljk0MTQwNyAxNy43MzA0NjgtMTcuNzM0Mzc1IDAtOS43OTI5NjktNy45Mzc1LTE3LjczNDM3NS0xNy43MzA0NjgtMTcuNzM0Mzc1aC0xMDYuNDAyMzQ0Yy0yOS4zNzg5MDYgMC01My4xOTkyMTkgMjMuODIwMzEyLTUzLjE5OTIxOSA1My4yMDMxMjV2NzAuOTMzNTk0YzAgMjkuMzc4OTA2IDIzLjgyMDMxMyA1My4xOTkyMTggNTMuMTk5MjE5IDUzLjE5OTIxOGg3MC45MzM1OTRjOS43OTI5NjggMCAxNy43MzQzNzUgNy45Mzc1IDE3LjczNDM3NSAxNy43MzA0Njl2NzAuOTMzNTk0YzAgOS43OTI5NjktNy45NDE0MDcgMTcuNzM0Mzc1LTE3LjczNDM3NSAxNy43MzQzNzV6bTAgMCIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
          />
        </div>
        <div className="about__content">
          <div className="about__content-head">
            <span className="circle__red"></span>
            <span className="circle__yellow"></span>
            <span className="circle__green"></span>
          </div>
          <div className="about__content-body">안녕하세요 :)</div>
          <div className="about__content-tail">
            <div>
              👋 색다른 경험을 만들고 싶은 프론트엔드 개발자 김승무 입니다.
            </div>
            <div>
              ⭐ 제가 구현한 서비스를 통해 사용자에게 색다른 경험을 주고
              싶습니다. 그런 경험은 코딩능력과 유저 인터페이스, 편의성 등이 모두
              갖춰졌을 때 만들어진다고 생각합니다. 개발 기술은 물론 UI / UX 또한
              생각할 수 있는 프론트엔드 개발자가 목표입니다.
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
