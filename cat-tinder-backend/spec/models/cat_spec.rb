require 'rails_helper'

# model tests - need model validations in app/models/cat.rb

RSpec.describe Cat, type: :model do
  it "should validate name" do
    cat = Cat.create
    expect(cat.errors[:name]).to_not be_empty
  end
  it "should validate age" do
    cat = Cat.create
    expect(cat.errors[:age]).to_not be_empty
  end
  it "should validate enjoys" do
    cat = Cat.create
    expect(cat.errors[:enjoys]).to_not be_empty
  end
end
