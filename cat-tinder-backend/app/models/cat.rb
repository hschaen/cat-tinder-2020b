class Cat < ApplicationRecord
  # validations for cat attributes
  validates :name, :age, presence: true
  validates :enjoys, length: {minimum: 4}
  validates :age, format: { with: /\A\d+\z/, message: "Please Enter a Number" }
end
