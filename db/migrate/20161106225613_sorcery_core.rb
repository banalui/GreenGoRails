class SorceryCore < ActiveRecord::Migration
  def change
    create_table :partners do |t|
      t.string :username,         :null => false
      t.string :email,            :null => false
      t.string :crypted_password
      t.string :salt

      t.timestamps
    end

    add_index :partners, :email, unique: true
  end
end