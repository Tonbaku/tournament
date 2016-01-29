package com.sb.tournament.view;

import javax.faces.context.FacesContext;

public class TypeDetailBB {
	private int current = 0;
	
	public void onAjaxCall(){
		String id = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap().get("toRender");
		this.current = Integer.parseInt(id);
	}
	
	public boolean isRendered(int id){
		return id==current?true:false;
	}
}
