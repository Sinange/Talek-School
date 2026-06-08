@echo off
title sinangeChatApp
set MODEL=C:\Users\USER\AppData\Local\nomic.ai\GPT4All\DeepSeek-R1-Distill-Qwen-1.5B-Q4_0.gguf
set MODEL1=C:\Users\USER\AppData\Local\nomic.ai\GPT4All\Llama-3.2-1B-Instruct-Q4_0.gguf
set MODEL2=C:\Users\USER\AppData\Local\nomic.ai\GPT4All\qwen2-1_5b-instruct-q4_0.gguf
set MODEL3=C:\Users\USER\AguppData\Local\nomic.ai\GPT4All\qwen2-1_5b.gguf
set n=-1
llama-cli.exe -m %MODEL% -p "Hello" -n %n% 
pause