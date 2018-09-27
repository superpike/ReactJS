import React from 'react';
import Author from './moduleAuthor';
import FooterInfo from './FooterInfo';


class Footer extends React.Component {
    render() {
        const info = [
            {
                title: "Контактная информация",
                classData: "item-contacts",
                data: [
                    {
                        classData: "contact",
                        icon: "fas fa-map-marker-alt b-footer__contact-icon",
                        text: "000000, Россия, город Москва,",
                        text2: "улица Ленина, 1 (выставочный зал)"
                    },
                    {
                        classData: "contact",
                        icon: "fas fa-fax b-footer__contact-icon",
                        text: "Тел: +7 (999) 999-99-99"
                    },
                    {
                        classData: "contact",
                        icon: "fas fa-envelope b-footer__contact-icon",
                        text: "Email: mail@mydomain.ru (обратная связь)"
                    },
                    {
                        classData: "contact",
                        icon: "far fa-clock b-footer__contact-icon",
                        text: "Пн-Пт 9:00-18:00",
                        text2: "Cб 10:00-16:00"
                    }
                ]
            },
            {
                title: "Продукция",
                classData: "item-links",
                data: [
                    {
                        classData: "item-link",
                        text: "Каталог 1"
                    },
                    {
                        classData: "item-link",
                        text: "Каталог 2"
                    },
                    {
                        classData: "item-link",
                        text: "Каталог 3"
                    },
                    {
                        classData: "item-link",
                        text: "Каталог 4"
                    },
                    {
                        classData: "item-link",
                        text: "Каталог 5"
                    },
                    {
                        classData: "item-link",
                        text: "Каталог 6"
                    },
                    {
                        classData: "item-link",
                        text: "Каталог 7"
                    },
                    {
                        classData: "item-link",
                        text: "Каталог 8"
                    }
                ]
            },
            {
                title: "Информация",
                classData: "item-links",
                data: [
                    {
                        classData: "item-link",
                        text: "О компании"
                    },
                    {
                        classData: "item-link",
                        text: "Доставка и оплата"
                    },
                    {
                        classData: "item-link",
                        text: "Отзывы"
                    },
                    {
                        classData: "item-link",
                        text: "Вопросы и ответы"
                    },
                    {
                        classData: "item-link",
                        text: "Наши работы"
                    },
                ]
            },
            {
                title: "Полезное",
                classData: "item-links",
                data: [
                    {
                        classData: "item-link",
                        text: "Контакты"
                    },
                    {
                        classData: "item-link",
                        text: "Политика конфиденциальности"
                    },
                    {
                        classData: "item-link",
                        text: "Карта сайта"
                    }
                ]
            },
            {
                title: "Следите за нами",
                titleClass: "heading_no-border",
                classData: "item-social-links",
                data: [
                    {
                        classData: "item-social-link",
                        icon: "fab fa-vk"
                    },
                    {
                        classData: "item-social-link",
                        icon: "fab fa-facebook"
                    },
                    {
                        classData: "item-social-link",
                        icon: "fab fa-instagram"
                    },
                    {
                        classData: "item-social-link",
                        icon: "fab fa-youtube"
                    }
                ]
            }
        ];
        
        return (
            <footer className="b-footer">
                <FooterInfo articles={info}/>
                <Author authorName={'Igor Paklin'}/>
            </footer>
        );
    }
}

export default Footer;