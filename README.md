# [REACT-CRM](https://andrew28092002.github.io/react-crm/)

Один из самых первых моих проектов на React, после которого я влюбился в него. Вернулся спустя почти полгода, чтобы переписать на TS.   

(Кто в 2023 ещё пишет на обычном JS?)

Проект реализован в стиле SPA с применением react-router-dom. Запросы к API осуществляются с помощью FETCH.    

Всего 3 страницы: "CREATE_FORM", "REQUESTS", "REQUEST". Есть возможность фильтрации по статусу заявки и наименованию продукта

UPD1: В ветке "redux" переписал все на ванильном redux с типизацией. Познакомился с такой прекрасной библиотекой, как reselector, которая позволяет очень просто организовать фильтрация элементов по определенному условию. Пытался все сделать самостоятельно, но в процессе решил познакомиться с данной библиотекой

UPD2: Упаковал все в docker. Есть версия для разработки, есть для продакшена. Так же добавил небольшой Bash-скрипт для запуска docker-compose 

`./deploy.sh dev|prod up|down`

![изображение](https://user-images.githubusercontent.com/98597980/226112648-04ec811c-8821-4dec-837e-4047e0fcdac8.png)
![изображение](https://user-images.githubusercontent.com/98597980/226112658-4552cd84-3f7e-4bbe-a76a-10645dd6be74.png)
![изображение](https://user-images.githubusercontent.com/98597980/226112670-8cf9ff30-3965-418c-bb4e-8022763cc4c8.png)

