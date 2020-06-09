require 'rails_helper'

describe("Cats API", type: :request) do
  # let will run before each test block, the bang sets priority, cannot be inside the it block, let! is the method and it takes two arguments, cat(model name as a symbol) and a block
  # Create a new cat in the Test Database (not the same one as development)
  # let!(:cat){Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')}

  # test for index method
  # it "gets a list of Cats" do
  #   # Make a request to the API
  #   get '/cats'
  #   # Convert the response into a Ruby Hash
  #   json = JSON.parse(response.body)
  #   # Assure that we got a successful response
  #   expect(response).to have_http_status(:ok)
  #   # Assure that we got one result back as expected
  #   expect(json.length).to eq 1
  # end
  #
  # # test for create method
  # it "creates a cat" do
  #   # The params we are going to send with the request
  #   cat_params = {
  #     cat: {
  #       name: 'Felix',
  #       age: 2,
  #       enjoys: 'Walks in the park'
  #     }
  #   }
  #   # Send the request to the server
  #   post '/cats', params: cat_params
  #   # Assure that we get a success back
  #   expect(response).to have_http_status(:ok)
  #   # Look up the cat we expect to be created in the Database
  #   new_cat = Cat.first
  #   # Assure that the created cat has the correct attributes
  #   expect(new_cat.name).to eq('Felix')
  #   expect(new_cat.age).to eq(2)
  #   expect(new_cat.enjoys).to eq('Walks in the park')
  # end

  # test for cat params - name attribute
  it "doesn't create a cat without a name" do
    cat_params = {
      cat: {
        age: 2,
        enjoys: 'Walks in the park'
      }
    }
    # Send the request to the  server
    post '/cats', params: cat_params
    # expect an error if the cat_params does not have a name
    expect(response.status).to eq 422
    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['name']).to include "can't be blank"
  end

  # # test for cat params - age attribute
  # it "doesn't create a cat without an age" do
  #   cat_params = {
  #     cat: {
  #       name: 'Moe',
  #       enjoys: 'Walks in the park'
  #     }
  #   }
  #   # Send the request to the  server
  #   post '/cats', params: cat_params
  #   # expect an error if the cat_params does not have an age
  #   expect(response.status).to eq 422
  #   # Convert the response into a Ruby Hash
  #   json = JSON.parse(response.body)
  #   # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
  #   expect(json['age']).to include "can't be blank"
  # end
  #
  # # test for cat params - enjoys attribute
  # it "doesn't create a cat without an enjoy" do
  #   cat_params = {
  #     cat: {
  #       name: 'Moe',
  #       age: 3
  #     }
  #   }
  #   # Send the request to the  server
  #   post '/cats', params: cat_params
  #   # expect an error if the cat_params does not have en enjoys
  #   expect(response.status).to eq 422
  #   # Convert the response into a Ruby Hash
  #   json = JSON.parse(response.body)
  #   # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
  #   expect(json['enjoys']).to include "can't be blank"
  # end

end
