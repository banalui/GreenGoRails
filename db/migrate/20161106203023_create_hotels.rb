class CreateHotels < ActiveRecord::Migration[5.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :street_address
      t.string :phone
      t.string :city
      t.string :country
      t.string :state
      t.string :zip_code
      t.integer :stars
      t.integer :eco_rate

      t.timestamps
    end
  end
end
