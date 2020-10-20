1.Приложение запускается командой npm run dev

2.Тесты запускаются командой npm run test

Список REST API :
    1. http://localhost:4000/users - GET, выводит список пользователей
    с определенным номером телефона или именем. Принимает на входе (phone && name)
    2.  http://localhost:4000/chats - GET, список диалогов.   
    3.  http://localhost:4000/chat/user - POST, добовляет нового пользователя. 
    Приниает на вход( nameUser, img, numberPhone) 
    4. http://localhost:4000/chats/chat/:chatId - POST, отправка сообщения любому пользователю.
    Принимает на вход(date, textMessage)
     



