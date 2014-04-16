class User < ActiveRecord::Base
  has_secure_password
  validates :username, presence: true
  validates :email, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message: "Please enter a valid email."}
  validates :password, length: {minimum: 6}
  validate :password_has_number_and_capital_letter

  has_many   :albums
end

def password_has_number_and_capital_letter
  if password =~ /.?[A-Z].?/ and password =~ /.?[0-9].?/
    true
  else
    false
  end
end

=begin
1Abcde
username exists
email exists and is formed like an email
password -- minimum 6 characters, at least one number and uppercase letter

=end
