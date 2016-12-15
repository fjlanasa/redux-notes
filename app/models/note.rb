class Note < ActiveRecord::Base
  validates :body, presence: true
  validates :folder_id, presence: true
  validates :user_id, presence: true

  belongs_to :folder
  belongs_to :user
end
