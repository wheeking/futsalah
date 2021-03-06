package ido.arduino.service;

import ido.arduino.dto.CourtAdminDTO;
import ido.arduino.dto.CourtDTO;
import ido.arduino.dto.ResultDto;

public interface CourtService {
	public int checkValid(String id, String password);
	public CourtAdminDTO login(String id);
	CourtDTO getCourtInfo(int courtID);
	public void reliability(String name, int much);
	public void modifyRecord(String name, String result);
	public void modifyPoints(String name);
	public void insertResult(ResultDto data);
}
