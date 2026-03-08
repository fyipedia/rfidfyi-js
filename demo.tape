# rfidfyi — TypeScript API Client Demo
Output demo.gif

Set FontSize 20
Set Width 1000
Set Height 580
Set Shell "zsh"
Set Theme "Catppuccin Mocha"
Set TypingSpeed 30ms
Set Padding 24

Type "node"
Enter
Sleep 1s

Type "const { RFIDFYI } = await import('rfidfyi')"
Enter
Sleep 1.5s

Type "const api = new RFIDFYI()"
Enter
Sleep 1s

Type "// Search"
Enter
Sleep 0.5s

Type "await api.search('monza')"
Enter
Sleep 2.5s

Type "// Detail lookup"
Enter
Sleep 0.5s

Type "await api.tag('monza-r6')"
Enter
Sleep 3s

Type ".exit"
Enter
Sleep 1s
