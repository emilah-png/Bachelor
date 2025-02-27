@echo off
if defined NPX_CMD (
    call "%NPX_CMD%" %*
) else (
    if exist "%PROGRAMFILES%\nodejs\" (
        call "%PROGRAMFILES%\nodejs\npx.cmd" %*
    ) else (
        if exist "%PROGRAMFILES(x86)%\nodejs\" (
        call "%PROGRAMFILES(x86)%\nodejs\npx.cmd" %*
        ) else (
            echo Failed to locate nodejs directory from TcHmiFramework npx.cmd 1>&2
        )
    )
)
