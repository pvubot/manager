var lang = {};

    lang.ext = 'ru'

    lang.nav = {
        accounts : 'Аккаунты',
        settings : 'Настройки'
    }

    lang.pages = {}

    lang.pages.accounts = {
        created : 'Создание аккаунта',
        edited : 'Изменение аккаунта',
        created_message : 'Аккаунт добавлен',
        edited_message : 'Аккаунт изменён',
        js_isRemoved:   'Точно удалить этот аккаунт?',
        dobavit : 'Добавить',
        account : 'Аккаунт',
        browser_proxy : 'Браузер/Прокси',
        placeholder : 'Поиск по названию',
        form_name : 'Название',
        form_browser_block : 'Настройки браузера',
        form_browser_name : 'User Agent',        
        form_drugoe_block : 'Другое',
        form_drugoe_notes : 'Заметки/Группа и т.п.',
        save : 'Сохранить'
    }

    lang.bell = {
        alert : {
            default : 'Системная ошибка',
            success : 'OK',
            error : 'Ошибка'
        },
        confirm : {
            buttons : ['Ок','Отмена'],
            header: 'Подтверждение'
        }
    }

    lang.buffer = {
        header: 'Буффер обмена',
        message: 'Текст успешно скопирован'
    }

    lang.errors = {

        error404 : {
            title : 'Страница не существует',
            header : 'Ошибка 404. Страница на которую вы перешли - не существует, либо она была удалена',
            content : 'В случае возникновения вопросов используйте наш телеграмм канал для получения поддержки от нас'
        },
        
        auth_header : 'Ошибка авторизации',
        auth_message : 'По всей видимости, срок авторизации истёк. Пройдите заново процедуру авторизации',
        
        input_header : 'Ошибка заполнения',
        input_message : 'По всей видимости, вы допустили ошибки в полях. Необходимо их исправить',
        
        error_header : 'Неизвестная ошибка на сервере',
        error_message : 'Сервер неожиданно отказался сотрудничать. Повторите запрос позже или напишите в тех-поддержку'
        
    }
   
    lang.pages.settings = {
        UI : 'Интерфейс',
        UILang : 'Язык интерфейса ( Требуется перезапуск программы )',
        save : 'Сохранить',
        saveOK : 'Настройки сохранены'
    }

module.exports = lang
