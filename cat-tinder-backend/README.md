# Cat Tinder Backend

## Set Up
- $ rails new cat_tinder_backend -d postgresql -T
- $ cd cat_tinder_backend
- $ rails db:create
- set up RSPec:
- $ echo "gem 'rspec-rails', groups: [:development, :test]" >> Gemfile
- $ bundle install
- $ rails generate rspec:install
- $ rspec spec

## Database Set Up
- create the cat resource:
- $ rails g resource cat name:string age:integer enjoys:text
- $ rails db:migrate
- put placeholder data in *db/seeds.rb*
```
cats = [{
  name: "Moe",
  age: 11,
  enjoys: "catnip"
},
{
  name: "Curly",
  age: 4,
  enjoys: "sleeping"
}]

# loop through the array and create each cat attribute
cats.each do |attributes|
  Cat.create attributes
  puts "creating cat #{attributes}"
end
```
- $ rails db:seed
- if data needs to be edited: $ rails db:drop db:create db:migrate db:seed -or- rails db:drop db:setup (for short) will drop and reseed the database

## Controller Set Up
- add `skip_before_action :verify_authenticity_token` to *app/controllers/application_controller.rb*
- add an empty method for index (catlist) and create (newcat)

## Model Specs
- add a model spec for each attribute (name, age, enjoys)

## Validations
- add validations to *app/model/cat.rb* to expect each attribute to exist

## Request Specs
- check for the directory called spec - should be there...
- add models directory and request directory
- add a request spec for getting a list of cats
- add a request spec for getting creating a new cat with cat_params
- add a request spec to check for existence of the name attribute
- add a request spec to check for existence of the age attribute
- add a request spec to check for existence of the enjoys attribute

## Index and Create Methods
- add code to the index method to return all the cats
- add a method for cat_params
- add code to the create method checking for cat_params with each new cat creation

## CORS
- add `gem 'rack-cors'` to the Gemfile
- add *cors.rb* to *config/initializers*
- add code to accept requests from the frontend
```
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```
- $ bundle install





let!(:cat){Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')}
