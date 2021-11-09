export default {
    "type": "document",
    "name": "advanced",
    "title": "Advanced Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "boolean",
            "name": "hide_title",
            "title": "Hide page title",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Page sections",
            "validation": null,
            "of": [
                {
                    "type": "section_content"
                },
                {
                    "type": "section_form"
                },
                {
                    "type": "section_grid"
                },
                {
                    "type": "section_hero"
                },
                {
                    "type": "section_portfolio"
                },
                {
                    "type": "section_posts"
                },
                {
                    "type": "section_testimonials"
                }
            ]
        },
        {
            "type": "stackbit_page_meta",
            "name": "seo",
            "title": "Seo",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "advanced"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_dir",
            "title": "Directory",
            "description": "The directory path where this file is stored",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "content/pages"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}