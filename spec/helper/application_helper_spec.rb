require 'rails_helper'

describe ApplicationHelper, type: :helper do
  describe '#layout_type' do
    it 'should return home when on landing page' do
      allow(self).to receive(:params).and_return(action: 'index')
      expect(layout_type).to eq 'home'
    end
    it 'should return index when on search results page' do
      allow(self).to receive(:params).and_return(q: 'roads', action: 'index')
      expect(layout_type).to eq 'index'
    end
    it 'should return item when on show page' do
      allow(self).to receive(:params).and_return(action: 'show')
      expect(layout_type).to eq 'item'
    end
  end
  describe '#home_layout?' do
    it 'should return true when on landing page' do
      allow(self).to receive(:params).and_return(action: 'index')
      expect(home_layout?).to be true
    end
  end
  describe '#index_layout?' do
    it 'should return true when on search results page' do
      allow(self).to receive(:params).and_return(q: 'roads', action: 'index')
      expect(index_layout?).to be true
    end
  end
  describe '#item_layout?' do
    it 'should return true when on show page' do
      allow(self).to receive(:params).and_return(action: 'show')
      expect(item_layout?).to be true
    end
  end
end